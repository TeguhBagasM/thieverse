import {
  BoxGeometry,
  CylinderGeometry,
  Group,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  TorusGeometry,
  type Texture,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const PALETTE = {
  light: { body: 0x4a90f0, stand: 0x3470c4, board: 0x1f3a2e, keys: 0xf7f8f3, ring: 0x2447c7 },
  dark: { body: 0x5b8fe8, stand: 0x3a63ad, board: 0x23382e, keys: 0xcbd8d0, ring: 0x8fa8ff },
};

/** Monitor low-poly dengan cincin di belakangnya, diturunkan dari bentuk logo Thieverse. */
export function createMonitorModel(screen: Texture, lite: boolean) {
  const group = new Group();
  const material = () => new MeshStandardMaterial({ roughness: 0.5, metalness: 0.12 });
  const materials = {
    body: material(),
    stand: material(),
    board: material(),
    keys: material(),
    ring: material(),
  };
  const corners = lite ? 2 : 4;

  const add = (mesh: Mesh, x: number, y: number, z: number) => {
    mesh.position.set(x, y, z);
    group.add(mesh);
    return mesh;
  };

  add(new Mesh(new RoundedBoxGeometry(4.5, 2.9, 0.34, corners, 0.14), materials.body), 0, 0.35, 0);
  add(
    new Mesh(new PlaneGeometry(4.1, 2.5), new MeshBasicMaterial({ map: screen, toneMapped: false })),
    0,
    0.35,
    0.176
  );
  add(new Mesh(new CylinderGeometry(0.22, 0.34, 0.75, 4), materials.stand), 0, -1.4, -0.05);
  add(new Mesh(new RoundedBoxGeometry(1.8, 0.16, 0.9, corners, 0.06), materials.body), 0, -1.82, 0);

  const keyboard = new Group();
  keyboard.add(new Mesh(new RoundedBoxGeometry(3.5, 0.14, 1.15, corners, 0.05), materials.board));
  const columns = 12;
  const rows = 4;
  // Semua tombol keyboard digambar dalam satu draw call.
  const keys = new InstancedMesh(new BoxGeometry(0.22, 0.09, 0.18), materials.keys, columns * rows);
  const matrix = new Matrix4();
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      matrix.setPosition((column - (columns - 1) / 2) * 0.27, 0.1, (row - (rows - 1) / 2) * 0.24);
      keys.setMatrixAt(row * columns + column, matrix);
    }
  }
  keyboard.add(keys);
  keyboard.position.set(0, -1.94, 1.25);
  keyboard.rotation.x = 0.16;
  group.add(keyboard);

  const ring = add(
    new Mesh(new TorusGeometry(2.85, 0.06, lite ? 6 : 10, lite ? 48 : 96), materials.ring),
    0,
    0.2,
    -0.9
  );

  const setTheme = (dark: boolean) => {
    const colors = dark ? PALETTE.dark : PALETTE.light;
    (Object.keys(materials) as (keyof typeof materials)[]).forEach((key) =>
      materials[key].color.setHex(colors[key])
    );
  };

  return { group, ring, setTheme };
}
