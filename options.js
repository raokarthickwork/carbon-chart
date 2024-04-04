export default {
  title: 'All market - Total SR',
  axes: {
    left: {
      mapsTo: 'value',
      scaleType: 'linear',
      title: 'VolumeMTM',
    },
    bottom: {
      mapsTo: 'date',
      scaleType: 'labels',
      ticks: {
        rotation: 'always',
      },
    },
  },
  color: {
    scale: {
      'Presales SR': '#005D5D',
    },
  },
  curve: 'curveMonotoneX',
  tooltip:
    '{"customHTML":"FUNCTION_FLAG (e) => {\\n        if (e) {\\n          const title = e[0].date;\\n          let tempString = \\" \\";\\n          for (let i in e) {\\n            let value =  e[i].value;\\n            value = value ? value : 0;\\n            if (typeof(value) === \'number\' && value.toString().indexOf(\'.\') > -1) {\\n              value = value.toFixed(2);\\n            }\\n            tempString +=\\n              \'<li style=\\"margin: 2px 4px\\"><p style=\\"font-size: 12px; width: max-content\\"><strong>\' +\\n              e[i].group +\\n              \': </strong>\' +\\n              value +\\n              \'</p></li>\';\\n          }\\n          return (\\n            \'<ul><li style=\\"margin: 2px 4px\\"><p style=\\"font-size: 12px; width: max-content\\"><strong>\' +\\n            title +\\n            \'</strong></p></li>\' +\\n            tempString + \'</ul>\'\\n          );\\n        }\\n      }","shared":true}',
};
