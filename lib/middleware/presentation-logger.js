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


function logger(num, message) {

  /*
    0 ========  Default START Log;
    1 ========  Database connected Log
    2 ========  Alien Base Log
  */

  let messageMode = 0;
  let messageBody = 'test';
  if (num <= 10){

    messageMode = num;

  }
  if(message !== '' || message.length > 15 ){

    messageBody = message;
  }

  if(messageMode === 0){

    log('                                                        ');
    log('    '+inverse.magenta('       ')+'        ');
    log('    '+inverse.magenta(' ')+'     '+inverse.magenta(' ')+'  '+inverse.magenta('  ')+' '+inverse.magenta('  ')+'      '+inverse.magenta('      ')+' '+inverse.magenta('     ')+' '+inverse.magenta('  ')+'         '+inverse.magenta('      ')+'      ');
    log('    '+inverse.magenta('      ')+'   '+inverse.magenta('  ')+' '+inverse.magenta('       ')+' '+inverse.magenta(' ')+'        '+inverse.magenta(' ')+'   '+inverse.magenta('    ')+'  '+inverse.magenta('  ')+''+inverse.magenta('  ')+'   '+inverse.magenta(' ')+'     ');
    log('    '+inverse.magenta(' ')+'        '+inverse.magenta('  ')+' '+inverse.magenta('  ')+'   '+inverse.magenta('  ')+' '+inverse.magenta('      ')+'   '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'   '+inverse.magenta(' ')+'   '+inverse.magenta('  ')+'   ');
    log('    '+inverse.magenta(' ')+'        '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'      '+inverse.magenta(' ')+'   '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'  '+inverse.magenta(' ')+'    '+inverse.magenta('  ')+'     ');
    log('    '+inverse.magenta(' ')+'        '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+' '+inverse.magenta('      ')+'   '+inverse.magenta('  ')+'  '+inverse.magenta('  ')+'   '+inverse.magenta('   ')+' '+inverse.magenta(' ')+'   '+inverse.magenta('  ')+'');
    log('                                                        ');
    log('                                                        ');
    log('                                                        ');
    log('                                 '+inverse.magentaBright('     ')+''+inverse.magenta(' ')+'                                     ');
    log('             '+inverse.cyanBright('   ')+'                '+inverse.magentaBright('        ')+''+inverse.magenta(' ')+' ');
    log('            '+inverse.cyanBright('  ')+' '+inverse.cyanBright('  ')+'             '+inverse.magenta(' ')+inverse.magentaBright(' Service  ')+''+inverse.magenta(' ')+' ');
    log('            '+inverse.cyanBright('     ')+'             '+inverse.magenta(' ')+inverse.magentaBright(' Starting ')+''+inverse.magenta(' ')+' ');
    log('             '+inverse.cyanBright('     ')+'            '+inverse.magenta(' ')+inverse.magentaBright('          ')+''+inverse.magenta(' ')+' ');
    log('              '+inverse.cyanBright('    ')+'             '+inverse.magenta(' ')+inverse.magentaBright('      ')+''+inverse.magenta('   ')+' ');
    log('               '+inverse.cyanBright('    ')+'             '+inverse.magenta('         ')+'                                    ');
    log('                '+inverse.cyanBright('    ')+'                                               ');
    log('                  '+inverse.cyanBright('   ')+'                                               ');
    log('                   '+inverse.cyanBright('  ')+'                                               ');
    log('                                                        ');
    log('                                                        ');
    log('                                                        ');





    return;
  }

  if(messageMode === 1){

    log('                                                                 ');
    log('                                                       '+inverse.magentaBright(' ')+'     '+inverse.magentaBright(' ')+'   ');
    log('                                                        '+inverse.magentaBright(' ')+'   '+inverse.magentaBright(' ')+'   ');
    log(''+blue(`                                `)+'                      '+inverse.magentaBright('         ')+'    ');
    log(''+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'                     '+inverse.magentaBright('   ')+' '+inverse.magentaBright('   ')+' '+inverse.magentaBright('   ')+'   ');
    log(''+blue(`                               `)+'                     '+inverse.magentaBright('             ')+'       ');
    log('                                                    '+inverse.magentaBright(' ')+' '+inverse.magentaBright('         ')+' '+inverse.magentaBright(' ')+'   ');
    log('                                                    '+inverse.magentaBright(' ')+' '+inverse.magentaBright(' ')+'       '+inverse.magentaBright(' ')+' '+inverse.magentaBright(' ')+'   ');
    log('                                                       '+inverse.magentaBright('   ')+' '+inverse.magentaBright('   ')+'   ');
    log('                                                                 ');
    log('                                                                 ');
    return;
  }
  if(messageMode === 2){

    log('                                                                 ');
    log('      '+red('    ')+'       ');
    log('    '+red('        ')+'       ');
    log('   '+red('          ')+'       ');
    log('  '+red('   ')+inverse.white('  ')+red('   ')+inverse.white('  ')+red(' ')+'   ');
    log('  '+red('  ')+inverse.white('    ')+red(' ')+inverse.white('    ')+'   ');
    log('  '+red('  ')+inverse.white('  ')+'  '+red(' ')+inverse.white('  ')+'   ');
    log('  '+red('   ')+inverse.white('  ')+red('   ')+inverse.white('  ')+red(' ')+'   ');
    log('  '+red('           ')+'      '+blue(`                                `)+' ');
    log('  '+red('           ')+'    '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'   ');
    log('  '+red('           ')+'   '+blue(`                               `)+'    ');
    log('  '+red('  ')+' '+red('     ')+' '+red('  ')+'      ');
    log('  '+red(' ')+'   '+red('   ')+'   '+red(' ')+'      ');
    log('                                                                 ');
    log('                                                                 ');

    return;
  }

  if(messageMode === 3){

    log('                                                                 ');
    // log('  ####   ####  #    # #    # ######  ####  ##### ###### #####    ');
    // log('  #    # #    # ##   # ##   # #      #    #   #   #      #    #  ');
    // log('  #      #    # # #  # # #  # #####  #        #   #####  #    #  ');
    // log('  #      #    # #  # # #  # # #      #        #   #      #    #  ');
    // log('  #    # #    # #   ## #   ## #      #    #   #   #      #    #  ');
    // log('  ####   ####  #    # #    # ######  ####    #   ###### #####    ');
    // log('                                                                 ');
    // log('                                                                 ');
    log('                                                                 ');
    log('     '+green(' ')+'     '+green(' ')+'   ');
    log('      '+green(' ')+'   '+green(' ')+'   ');
    log('    '+green('         ')+'      '+blue(`                              `)+' ');
    log('   '+green('   ')+' '+green('   ')+' '+green('   ')+'    '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'   ');
    log('  '+green('             ')+'   '+blue(`                             `)+'    ');
    log('  '+green(' ')+' '+green('         ')+' '+green(' ')+'   ');
    log('  '+green(' ')+' '+green(' ')+'       '+green(' ')+' '+green(' ')+'   ');
    log('     '+green('   ')+' '+green('   ')+'   ');
    log('                                                                 ');
    log('                                                                 ');


    return;
  }


  if(messageMode === 4){

    log('                                                                 ');
    log('                                                       '+inverse.white(' ')+'     '+inverse.white(' ')+'   ');
    log('                                                        '+inverse.white(' ')+'   '+inverse.white(' ')+'   ');
    log('                                                      '+inverse.white('         ')+'    ');
    log('                                                     '+inverse.white('   ')+' '+inverse.white('   ')+' '+inverse.white('   ')+'   ');
    log('                                                    '+inverse.white('             ')+'       ');
    log('                                                    '+inverse.white(' ')+' '+inverse.white('         ')+' '+inverse.white(' ')+'   ');
    log('                                                    '+inverse.white(' ')+' '+inverse.white(' ')+'       '+inverse.white(' ')+' '+inverse.white(' ')+'   ');
    log('                                                       '+inverse.white('   ')+' '+inverse.white('   ')+'   ');
    log('                                                                 ');
    log('                                                                 ');
    log('                                                                 ');
    log('                                '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}`)+'    ');
    log('                                                                 ');
    return;
  }

  if(messageMode === 5){

    log('                                                                 ');
    log('      '+inverse.yellow('    ')+'       ');
    log('    '+inverse.yellow('        ')+'       ');
    log('   '+inverse.yellow('          ')+'       ');
    log('  '+inverse.yellow('   ')+inverse.white('  ')+inverse.yellow('   ')+inverse.white('  ')+inverse.yellow(' ')+'   ');
    log('  '+inverse.yellow('  ')+inverse.white('    ')+inverse.yellow(' ')+inverse.white('    ')+'   ');
    log('  '+inverse.yellow('  ')+inverse.white('  ')+'  '+inverse.yellow(' ')+inverse.white('  ')+'   ');
    log('  '+inverse.yellow('   ')+inverse.white('  ')+inverse.yellow('   ')+inverse.white('  ')+inverse.yellow(' ')+'   ');
    log('  '+inverse.yellow('           ')+'       ');
    log('  '+inverse.yellow('           ')+'       ');
    log('  '+inverse.yellow('           ')+'       ');
    log('  '+inverse.yellow('  ')+' '+inverse.yellow('     ')+' '+inverse.yellow('  ')+'      ');
    log('  '+inverse.yellow(' ')+'   '+inverse.yellow('   ')+'   '+inverse.yellow(' ')+'      ');
    log('                                                                 ');
    log('                            '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'                                     ');
    log('                            '+blue(`    `)+'                                     ');
    log('                                                                 ');

    return;
  }

  if(messageMode === 6){

    log('                                                                 ');
    log('                                                       '+inverse.yellowBright(' ')+'     '+inverse.yellowBright(' ')+'   ');
    log('                                                        '+inverse.yellowBright(' ')+'   '+inverse.yellowBright(' ')+'   ');
    log('                                                      '+inverse.yellowBright('         ')+'    ');
    log('                                                     '+inverse.yellowBright('   ')+' '+inverse.yellowBright('   ')+' '+inverse.yellowBright('   ')+'   ');
    log('                                                    '+inverse.yellowBright('             ')+'       ');
    log('                                                    '+inverse.yellowBright(' ')+' '+inverse.yellowBright('         ')+' '+inverse.yellowBright(' ')+'   ');
    log('                                                    '+inverse.yellowBright(' ')+' '+inverse.yellowBright(' ')+'       '+inverse.yellowBright(' ')+' '+inverse.yellowBright(' ')+'   ');
    log('                                                       '+inverse.yellowBright('   ')+' '+inverse.yellowBright('   ')+'   ');
    log('                                                                 ');
    log('                                                                 ');
    log('                                                                 ');
    log('                                '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}`)+'    ');
    log('                                                                 ');
    return;
  }

  if(messageMode === 7){

    log('                                                                 ');
    log('                           '+inverse.blue('    ')+'       ');
    log('                         '+inverse.blue('        ')+'       ');
    log('                        '+inverse.blue('          ')+'       ');
    log('                       '+inverse.blue(' ')+inverse.white('  ')+inverse.blue('   ')+inverse.white('  ')+inverse.blue('   ')+'   ');
    log('                       '+inverse.blue('')+inverse.white('    ')+inverse.blue(' ')+inverse.white('    ')+''+inverse.blue('  ')+'   ');
    log('                       '+inverse.blue('')+inverse.white('  ')+'  '+inverse.blue(' ')+inverse.white('  ')+'  '+inverse.blue('  ')+'   ');
    log('                       '+inverse.blue(' ')+inverse.white('  ')+inverse.blue('   ')+inverse.white('  ')+inverse.blue('   ')+'   ');
    log('                       '+inverse.blue('           ')+'       ');
    log('                       '+inverse.blue('           ')+'       ');
    log('                       '+inverse.blue('           ')+'       ');
    log('                       '+inverse.blue('  ')+' '+inverse.blue('     ')+' '+inverse.blue('  ')+'      ');
    log('                       '+inverse.blue(' ')+'   '+inverse.blue('   ')+'   '+inverse.blue(' ')+'      ');
    log('                                                                 ');
    log('                            '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'                                     ');
    log('                            '+blue(`    `)+'                                     ');
    log('                                                                 ');

    return;
  }

  if(messageMode === 8){

    log('                                                                 ');
    log('                           '+inverse.magentaBright('    ')+'       ');
    log('                         '+inverse.magentaBright('        ')+'       ');
    log('                        '+inverse.magentaBright('          ')+'       ');
    log('                       '+inverse.magentaBright(' ')+inverse.white('  ')+inverse.magentaBright('   ')+inverse.white('  ')+inverse.magentaBright('   ')+'   ');
    log('                       '+inverse.magentaBright('')+inverse.white('    ')+inverse.magentaBright(' ')+inverse.white('    ')+''+inverse.magentaBright('  ')+'   ');
    log('                       '+inverse.magentaBright('')+inverse.white('  ')+'  '+inverse.magentaBright(' ')+inverse.white('  ')+'  '+inverse.magentaBright('  ')+'   ');
    log('                       '+inverse.magentaBright(' ')+inverse.white('  ')+inverse.magentaBright('   ')+inverse.white('  ')+inverse.magentaBright('   ')+'   ');
    log('                       '+inverse.magentaBright('           ')+'       ');
    log('                       '+inverse.magentaBright('           ')+'       ');
    log('                       '+inverse.magentaBright('           ')+'       ');
    log('                       '+inverse.magentaBright('  ')+' '+inverse.magentaBright('     ')+' '+inverse.magentaBright('  ')+'      ');
    log('                       '+inverse.magentaBright(' ')+'   '+inverse.magentaBright('   ')+'   '+inverse.magentaBright(' ')+'      ');
    log('                                                                 ');
    log('                            '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'                                     ');
    log('                            '+blue(`    `)+'                                     ');
    log('                                                                 ');

    return;
  }

  if(messageMode === 9){

    log('                                                                 ');
    log('                           '+inverse.green(' ')+'  '+inverse.magenta(' ')+inverse.green('    ')+inverse.magenta(' ')+'  '+inverse.green(' ')+'       ');
    log('                          '+inverse.green('  ')+' '+inverse.green('        ')+' '+inverse.green('  ')+'       ');
    log('                           '+inverse.green('            ')+'       ');
    log('                             '+inverse.green('        ')+'       ');
    log('                             '+inverse.green('        ')+'       ');
    log('                            '+inverse.green('          ')+'       ');
    log('                           '+inverse.green('  ')+'        '+inverse.green('  ')+'           ');
    log('                             '+inverse.green('  ')+'    '+inverse.green('  ')+'           ');
    log('                                                                           ');
    log('                                                                 ');
    log('                            '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'                                     ');
    log('                            '+blue(`    `)+'                                     ');
    log('                                                                 ');

    return;
  }

  if(messageMode === 10){
    log('                                                                 ');
    log('                                                         '+inverse.white(' ')+'  '+blue(' ')+inverse.white('    ')+inverse.blue(' ')+'  '+inverse.white(' ')+'       ');
    log('                                                        '+inverse.white('  ')+' '+inverse.white('        ')+' '+inverse.white('  ')+'       ');
    log('                                                         '+inverse.white('            ')+'       ');
    log('                                                           '+inverse.white('        ')+'       ');
    log('                                                           '+inverse.white('        ')+'       ');
    log('                                                          '+inverse.white('          ')+'       ');
    log('                                                         '+inverse.white('  ')+'        '+inverse.white('  ')+'           ');
    log('                                                           '+inverse.white('  ')+'    '+inverse.white('  ')+'           ');
    log('                                                                           ');
    log('                                                                 ');
    log('                            '+blue(` `)+''+cyan(`  ${messageBody || 'hello world'}   `)+''+blue(` `)+'                                     ');
    log('                            '+blue(`    `)+'                                     ');
    log('                                                                 ');
    return;
  }
  else {


    log(inverse(`Not working: test`));
    return;

  }
}

module.exports = logger;



