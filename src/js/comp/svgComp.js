import $ from 'jquery';
import snap from 'snapsvg';

const expandRing = (posX, posY) => {
  const svgString = `<svg width='2000' height='2000' id='svgRing' style='position:absolute; left:0; top:0; z-index:4000'>
                      <clipPath id='clippy'>
                        <circle r='200' stroke='orange' stroke-width='10' fill='transparent' cy='${posY + 100}' cx='${posX + 100}'>
                          <animate attributeType='XML' attributeName='r' from='200' to='1000' dur='4s'/>
                          <animate attributeType='XML' attributeName='stroke-width' from='10' to='50' dur='4s'/>
                        </circle>
                      </clipPath>
                    </svg>`;
  $('#body').append(svgString);
  const snappy = snap('#svgRing');
  const circle1 = snappy.circle(posX + 100, posY + 100, 200);
  circle1.attr({
    fill: 'green', id: 'circle1', stroke: 'orange', strokeWidth: 10,
  });
  circle1.animate({ r: 1000, strokeWidth: 50 }, 4000);
  const square1 = snappy.rect(0, 0, 2000, 2000);
  square1.attr({ fill: 'transparent', mask: circle1 });
  setTimeout(() => {
    $('#svgRing').remove();
  }, 4000);
};

export default {
  expandRing,
};
