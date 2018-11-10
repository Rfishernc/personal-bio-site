import $ from 'jquery';

function expandRing(posX, posY) {
  const svgString = `<svg width='500' height='500' id='svgRing' style='position:absolute; left:${posX}px; bottom:${posY}px'>
                      <circle r='180' stroke='orange' stroke-width='10' fill='transparent' cy=250 cx=250/>
                    </svg>`;
  $('#body').append(svgString);
}

export default { expandRing };
