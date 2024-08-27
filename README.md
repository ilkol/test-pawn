# Pawn Language

- [Русский](#ru)
- [English](#en)

# Ru

Данное расширение позволяет использовать VSCode для удобной работы с программами на скриптовом языке программирования Pawn (SA:MP)

- [Реализованные функции](#реализованные-функции)
- [Планы](#планы)
- [Сборка проекта / компиляция мода](#сборка-проекта)
- [Документирование кода](#документирование-кода)

## Реализованные функции

Расширение включает в себя:

- Синтаксическую подсветку Pawn кода
- Синтаксическую подсветку SQL запросов внутри строк
- Несколько быстрых вводов фрагментов кода (snipets)
- Быстрый выбор цвета (Color picker) в коде
- Анализатор кода на синтаксические, грамматические и семантические ошибки
- Переход к реализациям функций и их вызовам
- [Возможность сборки проекта "в один клик"](#сборка-проекта)
- Помощь с параметрами функций
- [Документирование кода в двух форматах](#документирование-кода)

## Планы

- Улучшение рабоыт анализа кода
- Увелечение количества ошибок, которые может найти анализатор
- Быстрые исправления найденных ошибок (quick fix)
- Поддержка добавления документации к функциям

### Сборка проекта

Чтобы собрать ваш проект, выполните следующие действия:

1. Убедитесь, что в корневой директории проекта есть папка pawno, в которой находится компилятор.
2. Откройте файл для компиляции.
3. Нажмите кнопку F5.

После выполнения этих шагов откроется терминал с результатами компиляции.

Если вы хотите избежать очистки консоли при каждой повторной компиляции, отключите соответствующий параметр в настройках расширения. Для этого:

1. Откройте параметры (нажмите CTRL + ,).
2. В разделе «Расширения» выберите «Pawn Language».
3. В настройках найдите пункт «Очищать консоль перед запуском сборки проекта» (Clear on Build) и отключите его.

## Документирование кода

Расширение позволяет разработчикам создавать комментарии-документацию к функциям. 

Доступны два формата комментирования:

| Подобно JSDoc | ![JSDoc code](https://i.imgur.com/PydULJg.png)    | ![Pawn doc result](https://i.imgur.com/Bp5IDd1.png) |
| ------------- | ------------------------------------------------- | --------------------------------------------------- |
| **Pawn-doc**  | ![Pawn doc code](https://i.imgur.com/6q87zbb.png) | ![Pawn doc result](https://i.imgur.com/l0PlIBR.png) |

Мы предлагаем использовать более удобный первый вариант, при этом сохраняя поддержку старого.


# En
This extension provides the ability to use VSCode for convenient work with programs in the Pawn scripting programming language (SA:MP)

- [Functionality](#functionality)
- [Plans](#plans)
- [Build project / compile gamemode](#build-project)
- [Code documentation](#code-documentation)

## Functionality

The extension includes:

- Syntax highlighting of Pawn code
- Syntax highlighting of SQL queries inside strings
- Several quick inputs of code fragments (snipets)
- Quick color picker in code
- Code analyzer for syntax, grammatical and semantic errors
- Transition to function implementations and their calls
- [Ability to build a project “in one click”](#build-project)
- Help with function parameters
- [Documenting code in two formats](#code-documentation)
## Plans

- Improved code analysis performance
- Increasing the number of errors that the analyzer can find
- Quick fixes for found errors (quick fix)

### Build project

To build your project, follow these steps:

1. Make sure that in the root directory of the project (workspace) there is a pawno folder where the compiler is located.
2. Open the file to compile.
3. Press the F5 button.

After completing these steps, a terminal will open with the results of the compilation.

If you want to avoid clearing the console every time you recompile, disable the corresponding option in the extension settings. To do this:

1. Open options (press CTRL + ,).
2. In the Extensions section, select Pawn Language.
3. In the settings, find the item “Clear the console before starting the project build” (Clear on Build) and disable it.

## Code documentation

The extension allows developers to create comments-documentation for functions.

Two comment formats are available:

| Like JSDoc | ![JSDoc code](https://i.imgur.com/PydULJg.png)    | ![Pawn doc result](https://i.imgur.com/Bp5IDd1.png) |
| ------------- | ------------------------------------------------- | --------------------------------------------------- |
| **Pawn-doc**  | ![Pawn doc code](https://i.imgur.com/6q87zbb.png) | ![Pawn doc result](https://i.imgur.com/SPMfxSy.png) |

We suggest using the more convenient first option, while maintaining support for the old one.