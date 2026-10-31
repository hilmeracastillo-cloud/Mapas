/**
 * Comprehensive Product & Resource Icon Resolver
 * Maps economic product names, exports, imports, and natural resources
 * in English or Spanish to specific, intuitive visual icons.
 */
export function getProductIcon(rawText: string): string {
  if (!rawText) return '📦';
  const t = rawText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // strip accents for foolproof matching

  // 1. Hydrocarbons, Fuels & Energy Sources
  if (
    t.includes('gas natural') ||
    t.includes('natural gas') ||
    t.includes('lng') ||
    t.includes('gnl') ||
    t.includes('metano') ||
    t.includes('methane') ||
    t.includes('propano') ||
    t.includes('butano')
  ) {
    return '🔥';
  }
  if (
    t.includes('petroleo') ||
    t.includes('petroleum') ||
    t.includes('crudo') ||
    t.includes('crude') ||
    t.includes('combustible') ||
    t.includes('gasolina') ||
    t.includes('gasoline') ||
    t.includes('diesel') ||
    t.includes('nafta') ||
    t.includes('oil field') ||
    t.includes('shale oil') ||
    t.includes('esquisto') ||
    t.includes('orinoco belt') ||
    t.includes('faja petrolifera') ||
    t.includes('hidrocarburo') ||
    t.includes('hydrocarbon')
  ) {
    return '🛢️';
  }

  // 2. Vehicles, Aerospace & Automotive
  if (
    t.includes('aeronave') ||
    t.includes('aircraft') ||
    t.includes('avion') ||
    t.includes('airplane') ||
    t.includes('aerospace') ||
    t.includes('helicopter')
  ) {
    return '✈️';
  }
  if (
    t.includes('barco') ||
    t.includes('ship') ||
    t.includes('buque') ||
    t.includes('vessel') ||
    t.includes('maritimo') ||
    t.includes('maritime') ||
    t.includes('barge') ||
    t.includes('barcaza')
  ) {
    return '🚢';
  }
  if (
    t.includes('autoparte') ||
    t.includes('vehicle part') ||
    t.includes('repuesto') ||
    t.includes('neumatico') ||
    t.includes('tire') ||
    t.includes('tyre') ||
    t.includes('llanta')
  ) {
    return '🛞';
  }
  if (
    t.includes('automovil') ||
    t.includes('auto') ||
    t.includes('car') ||
    t.includes('vehiculo') ||
    t.includes('vehicle') ||
    t.includes('truck') ||
    t.includes('camion') ||
    t.includes('van')
  ) {
    return '🚗';
  }

  // 3. High Tech, Electronics & Computing
  if (
    t.includes('circuito') ||
    t.includes('circuit') ||
    t.includes('microchip') ||
    t.includes('semiconductor') ||
    t.includes('procesador') ||
    t.includes('processor')
  ) {
    return '💽';
  }
  if (
    t.includes('computador') ||
    t.includes('computer') ||
    t.includes('laptop') ||
    t.includes('servidor') ||
    t.includes('server')
  ) {
    return '💻';
  }
  if (
    t.includes('transmision') ||
    t.includes('broadcasting') ||
    t.includes('telecom') ||
    t.includes('telefono') ||
    t.includes('phone') ||
    t.includes('celular') ||
    t.includes('radio') ||
    t.includes('antenna')
  ) {
    return '📡';
  }
  if (t.includes('robot') || t.includes('robotica') || t.includes('automatizacion') || t.includes('automation')) {
    return '🤖';
  }
  if (t.includes('reloj') || t.includes('watch') || t.includes('clock')) {
    return '⌚';
  }

  // 4. Pharmaceuticals, Medicine & Chemistry
  if (t.includes('vacuna') || t.includes('vaccine') || t.includes('sangre') || t.includes('blood') || t.includes('suero')) {
    return '💉';
  }
  if (
    t.includes('medicamento') ||
    t.includes('medicament') ||
    t.includes('farmaceutico') ||
    t.includes('pharmaceutical') ||
    t.includes('medicina') ||
    t.includes('drug')
  ) {
    return '💊';
  }
  if (t.includes('ortopedic') || t.includes('orthopedic') || t.includes('medic') || t.includes('medical') || t.includes('quirurgic')) {
    return '🩺';
  }
  if (
    t.includes('alcohol') ||
    t.includes('polimero') ||
    t.includes('polymer') ||
    t.includes('etileno') ||
    t.includes('ethylene') ||
    t.includes('propileno') ||
    t.includes('propylene') ||
    t.includes('amoniaco') ||
    t.includes('ammonia') ||
    t.includes('quimic') ||
    t.includes('chemical') ||
    t.includes('plastico') ||
    t.includes('plastic') ||
    t.includes('insecticida') ||
    t.includes('pesticida') ||
    t.includes('pesticide')
  ) {
    return '🧪';
  }
  if (
    t.includes('fertilizante') ||
    t.includes('fertilizer') ||
    t.includes('abono') ||
    t.includes('fosfato') ||
    t.includes('phosphate')
  ) {
    return '🌱';
  }

  // 5. Mining, Metals & Strategic Minerals
  if (t.includes('oro') || t.includes('gold')) {
    return '🪙';
  }
  if (t.includes('plata') || t.includes('silver')) {
    return '🥈';
  }
  if (t.includes('cobre') || t.includes('copper')) {
    return '🥉';
  }
  if (t.includes('litio') || t.includes('lithium') || t.includes('bateria') || t.includes('battery')) {
    return '🔋';
  }
  if (
    t.includes('hierro') ||
    t.includes('iron') ||
    t.includes('acero') ||
    t.includes('steel') ||
    t.includes('mutun') ||
    t.includes('carajas') ||
    t.includes('pilbara')
  ) {
    return '🏗️';
  }
  if (t.includes('carbon') || t.includes('coal') || t.includes('briquette')) {
    return '🪨';
  }
  if (
    t.includes('diamante') ||
    t.includes('diamond') ||
    t.includes('joya') ||
    t.includes('jewelry') ||
    t.includes('gema') ||
    t.includes('gem') ||
    t.includes('esmeralda') ||
    t.includes('emerald')
  ) {
    return '💎';
  }
  if (
    t.includes('estano') ||
    t.includes('tin') ||
    t.includes('zinc') ||
    t.includes('plomo') ||
    t.includes('lead') ||
    t.includes('niquel') ||
    t.includes('nickel') ||
    t.includes('titanio') ||
    t.includes('titanium') ||
    t.includes('niobio') ||
    t.includes('niobium')
  ) {
    return '🔩';
  }
  if (t.includes('bauxita') || t.includes('bauxite') || t.includes('aluminio') || t.includes('aluminium') || t.includes('aluminum')) {
    return '🧱';
  }
  if (t.includes('sal') || t.includes('salt') || t.includes('salar')) {
    return '🧂';
  }
  if (t.includes('chatarra') || t.includes('scrap') || t.includes('reciclaj') || t.includes('waste metal')) {
    return '♻️';
  }
  if (
    t.includes('caliza') ||
    t.includes('limestone') ||
    t.includes('granito') ||
    t.includes('granite') ||
    t.includes('marmol') ||
    t.includes('marble') ||
    t.includes('cemento') ||
    t.includes('cement')
  ) {
    return '🏛️';
  }

  // 6. Agriculture, Food, Livestock & Forestry
  if (t.includes('soya') || t.includes('soja') || t.includes('soybean') || t.includes('legumbre') || t.includes('bean')) {
    return '🫘';
  }
  if (
    t.includes('trigo') ||
    t.includes('wheat') ||
    t.includes('cebada') ||
    t.includes('barley') ||
    t.includes('avena') ||
    t.includes('oats') ||
    t.includes('cereal') ||
    t.includes('grano') ||
    t.includes('grain')
  ) {
    return '🌾';
  }
  if (t.includes('maiz') || t.includes('corn')) {
    return '🌽';
  }
  if (t.includes('arroz') || t.includes('rice')) {
    return '🍚';
  }
  if (t.includes('cafe') || t.includes('coffee')) {
    return '☕';
  }
  if (t.includes('azucar') || t.includes('sugar') || t.includes('cana') || t.includes('cane')) {
    return '🍬';
  }
  if (
    t.includes('carne') ||
    t.includes('meat') ||
    t.includes('beef') ||
    t.includes('res') ||
    t.includes('pollo') ||
    t.includes('poultry') ||
    t.includes('cerdo') ||
    t.includes('pork') ||
    t.includes('ganado') ||
    t.includes('livestock')
  ) {
    return '🥩';
  }
  if (t.includes('leche') || t.includes('milk') || t.includes('lacteo') || t.includes('dairy') || t.includes('queso') || t.includes('cheese')) {
    return '🥛';
  }
  if (
    t.includes('salmon') ||
    t.includes('marisco') ||
    t.includes('seafood') ||
    t.includes('pescad') ||
    t.includes('fish') ||
    t.includes('pesca') ||
    t.includes('fisher') ||
    t.includes('anchoveta') ||
    t.includes('anchovy')
  ) {
    return '🐟';
  }
  if (
    t.includes('fruta') ||
    t.includes('fruit') ||
    t.includes('citrico') ||
    t.includes('citrus') ||
    t.includes('naranja') ||
    t.includes('orange') ||
    t.includes('manzana') ||
    t.includes('apple')
  ) {
    return '🍊';
  }
  if (t.includes('platano') || t.includes('banana')) {
    return '🍌';
  }
  if (t.includes('vino') || t.includes('wine') || t.includes('uva') || t.includes('grape')) {
    return '🍷';
  }
  if (
    t.includes('algodon') ||
    t.includes('cotton') ||
    t.includes('textil') ||
    t.includes('ropa') ||
    t.includes('apparel') ||
    t.includes('clothing')
  ) {
    return '👕';
  }
  if (
    t.includes('madera') ||
    t.includes('timber') ||
    t.includes('wood') ||
    t.includes('forest') ||
    t.includes('bosque') ||
    t.includes('hardwood')
  ) {
    return '🪵';
  }

  // 7. Natural Wealth, Energy & Environment
  if (
    t.includes('suelo') ||
    t.includes('soil') ||
    t.includes('arable') ||
    t.includes('fertil') ||
    t.includes('tierra') ||
    t.includes('plains') ||
    t.includes('llanura')
  ) {
    return '🌱';
  }
  if (
    t.includes('agua dulce') ||
    t.includes('freshwater') ||
    t.includes('lago') ||
    t.includes('lake') ||
    t.includes('acuifero') ||
    t.includes('glaciar') ||
    t.includes('glacier') ||
    t.includes('cuenca') ||
    t.includes('water tower')
  ) {
    return '💧';
  }
  if (
    t.includes('hidroelectric') ||
    t.includes('hydroelectric') ||
    t.includes('represa') ||
    t.includes('dam') ||
    t.includes('cascada') ||
    t.includes('waterfall') ||
    t.includes('electricidad') ||
    t.includes('electricity') ||
    t.includes('energia') ||
    t.includes('energy')
  ) {
    return '⚡';
  }
  if (t.includes('solar') || t.includes('sol') || t.includes('irradiacion') || t.includes('irradiation')) {
    return '☀️';
  }
  if (t.includes('viento') || t.includes('wind') || t.includes('eolic')) {
    return '💨';
  }
  if (t.includes('arrecife') || t.includes('reef') || t.includes('coral')) {
    return '🪸';
  }
  if (
    t.includes('biodiversidad') ||
    t.includes('biodiversity') ||
    t.includes('fauna') ||
    t.includes('flora') ||
    t.includes('amazonic') ||
    t.includes('rainforest') ||
    t.includes('selva')
  ) {
    return '🌿';
  }
  if (t.includes('geotermic') || t.includes('volcan') || t.includes('volcanic')) {
    return '🌋';
  }
  if (
    t.includes('fondo') ||
    t.includes('fund') ||
    t.includes('banco') ||
    t.includes('bank') ||
    t.includes('inversion') ||
    t.includes('investment') ||
    t.includes('financier')
  ) {
    return '🏦';
  }
  if (
    t.includes('turbina') ||
    t.includes('turbine') ||
    t.includes('maquinaria') ||
    t.includes('machinery') ||
    t.includes('equipo industrial') ||
    t.includes('industrial equipment')
  ) {
    return '⚙️';
  }

  // Fallback icon for general economic goods
  return '📦';
}
