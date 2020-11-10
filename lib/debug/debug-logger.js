'use strict';
const chalk = require('chalk');
const log = console.log;
const inverse = chalk.inverse;

const white = chalk.inverse.white;
const red = chalk.inverse.redBright;
const blue = chalk.inverse.blueBright;
const green = chalk.inverse.greenBright;
const black = chalk.inverse.blackBright;
const cyan = chalk.inverse.cyanBright;


function debugLogger(num, message) {

  /*

    0 ========  Default START Log;
    1 ========  Database connected Log
    2 ========  Alien Base Log
  */

  let messageMode = 0;
  let messageBody = 'test';
  if (num === 0|| num === 1 || num === 2 || num === 3){

    messageMode = num;

  }
  if(message !== '' || message.length > 15 ){

    messageBody = message;
  }

  if(messageMode === 0){

    log('                                                        ');
    log('    8""""8          8""""8                              ');
    log('    8    8 e  eeeee 8      eeeee eeeee  eeeee eeeee     ');
    log('    8eeee8 8  8   8 8eeeee   8   8   8  8   8   8       ');
    log('    88     8e 8e  8     88   8e  8eee8e 8eee8   8e      ');
    log('    88     88 88  8 e   88   88  88   8 88  8   88      ');
    log('    88     88 88  8 8eee88   88  88   8 88  8   88      ');
    log('                                                        ');
    log('                                                        ');
    log('                                                        ');
    log('                               '+inverse.magenta('                       ')+'                                     ');
    log('                              '+inverse.magenta(' ')+''+inverse.magentaBright(' Service    Starting ')+''+inverse.magenta(' ')+'            ');
    log('                              '+inverse.magenta('                      ')+'                                    ');
    log('                                                        ');
    log('                                                        ');
    log('                                                        ');





    return;
  }
  if(messageMode === 1){

    log('                                                                 ');
    log('  ####   ####  #    # #    # ######  ####  ##### ###### #####    ');
    log('  #    # #    # ##   # ##   # #      #    #   #   #      #    #  ');
    log('  #      #    # # #  # # #  # #####  #        #   #####  #    #  ');
    log('  #      #    # #  # # #  # # #      #        #   #      #    #  ');
    log('  #    # #    # #   ## #   ## #      #    #   #   #      #    #  ');
    log('  ####   ####  #    # #    # ######  ####    #   ###### #####    ');
    log('                                                                 ');
    log('                                                                 ');
    log('                                                                 ');
    log('     '+green(' ')+'     '+green(' ')+'   ');
    log('      '+green(' ')+'   '+green(' ')+'   ');
    log('    '+green('         ')+'      '+blue(`                              `)+' ');
    log('   '+green('   ')+' '+green('   ')+' '+green('   ')+'    '+blue(` `)+''+cyan(`  ${messageBody}   `)+''+blue(` `)+'   ');
    log('  '+green('             ')+'   '+blue(`                             `)+'    ');
    log('  '+green(' ')+' '+green('         ')+' '+green(' ')+'   ');
    log('  '+green(' ')+' '+green(' ')+'       '+green(' ')+' '+green(' ')+'   ');
    log('     '+green('   ')+' '+green('   ')+'   ');
    log('                                                                 ');
    log('                                                                 ');


    return;
  }

  if(messageMode === 2){

    log('                                                                 ');
    log('     '+inverse.magentaBright(' ')+'     '+inverse.magentaBright(' ')+'   ');
    log('      '+inverse.magentaBright(' ')+'   '+inverse.magentaBright(' ')+'   ');
    log('    '+inverse.magentaBright('         ')+'      '+blue(`                                `)+' ');
    log('   '+inverse.magentaBright('   ')+' '+inverse.magentaBright('   ')+' '+inverse.magentaBright('   ')+'    '+blue(` `)+''+cyan(`  ${messageBody}   `)+''+blue(` `)+'   ');
    log('  '+inverse.magentaBright('             ')+'   '+blue(`                               `)+'    ');
    log('  '+inverse.magentaBright(' ')+' '+inverse.magentaBright('         ')+' '+inverse.magentaBright(' ')+'   ');
    log('  '+inverse.magentaBright(' ')+' '+inverse.magentaBright(' ')+'       '+inverse.magentaBright(' ')+' '+inverse.magentaBright(' ')+'   ');
    log('     '+inverse.magentaBright('   ')+' '+inverse.magentaBright('   ')+'   ');
    log('                                                                 ');
    log('                                                                 ');

    log('                                                                 ');
    log('      '+red('    ')+'       ');
    log('    '+red('        ')+'       ');
    log('   '+red('          ')+'       ');
    log('  '+red('   ')+inverse.white('  ')+red('   ')+inverse.white('  ')+red(' ')+'   ');
    log('  '+red('  ')+inverse.white('    ')+red(' ')+inverse.white('    ')+'   ');
    log('  '+red('  ')+inverse.white('  ')+'  '+red(' ')+inverse.white('  ')+'   ');
    log('  '+red('   ')+inverse.white('  ')+red('   ')+inverse.white('  ')+red(' ')+'   ');
    log('  '+red('           ')+'      '+blue(`                                `)+' ');
    log('  '+red('           ')+'    '+blue(` `)+''+cyan(`  ${messageBody}   `)+''+blue(` `)+'   ');
    log('  '+red('           ')+'   '+blue(`                               `)+'    ');
    log('  '+red('  ')+' '+red('     ')+' '+red('  ')+'      ');
    log('  '+red(' ')+'   '+red('   ')+'   '+red(' ')+'      ');
    log('                                                                 ');
    log('                                                                 ');

    return;
  }

  log(inverse(`Not working: test`));
  return;


}

module.exports = debugLogger;




