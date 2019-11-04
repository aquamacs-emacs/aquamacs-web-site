## 3.5

- Fixed a compatibility issue with macOS Mojave. Aquamacs is now compiled and distributed with a copy of the gnutls library to enable secure web connections. The version in this distribution is 3.6.8. Only the shared library and its library dependencies are included. This was done because Emacs has removed support for using the openssl command line tool shipped with Mac OS X. Code for building the libraries contributed by Win Treese. License information for these libraries is included the manual.

- In order to provide compatibility with gnutls, the oldest supported version of Mac OS X is now El Capitan (10.11).

- This version also bundles the binary shared library for the libxml2 library (version 2.9.9).

- ESS has been updated to version 18.10.2. See here for all new features: <tt><a name="tex2html39" href="http://ess.r-project.org/Manual/ess.html#New-features" id="tex2html39">http://ess.r-project.org/Manual/ess.html#New-features</a></tt>.

- Known bug (MacOS Mojave): menus may require a double click to open with the mouse. When this happens, go to System Preferences, Security&amp;Privacy, Accessibility, and allow Aquamacs to ``control your computer''. This merely enables Aquamacs to process some UI events. (Note that this workaround does not apply to nightly builds because they lack a code signature.)

- Bug fix: a rare condition (when Tabs are not in used) could occur where frames will be unresponsive to user input. Reported by Lewis Hyatt.

- Bug fix: Color lists were unavailable on late MacOS versions. Reported by Max Arnold.

## 2.4

- Added <I>visual-basic-mode</I>. Code by Fred White, Dave Love, Randolph Fritz and Vincent Belaiche.

- Fix crash that could occur during start of Aquamacs (in <I>x_set_frame_parameters</I>) Reported by Will Morton, Barbara Shirtcliff, Enrico Rinaldi.

- Support for fullscreen button in windows, available in Mac OS X 10.7 ``Lion''.  As additional keyboard shortcut, Command-Control-F, is available.

- Improved support for resizing frames in Mac OS X 10.7.

- Load calculator (M-x calc) correctly even after saving calculator settings. Reported by Stefan Vollmar.

- When deleting (killing) a whole line, the beginning space of a following line was deleted in `smart-spacing-mode'.  This is no longer the case.
Reported by James Thurgood and Robert Morelli.

- When deleting several words in a row (killing them to append them to the kill ring), they are no longer added as run-in words in smart spacing mode.  Spaces are addes where appropriate.

- Drag&amp;drop into windows showing eshell, shell and other comint-based buffers now inserts the full file name. Suggested by Jan Marius Hofert.

- When expanding the load path (e.g., for library files) in directories such as Library/Application&nbsp Support/Aquamacs&nbsp;Emacs, a file called .nosearch now prevents Aquamacs from adding the present and subordinate directories.  (The previous <TT>.ignore</TT> file only worked at the topmost level.)
Reported by Nathaniel Cunningham.

- Fixed issue that could lead to a crash when using Aquamacs as an editor (ODB standard) from certain other applications. Reported by Kevin Kirkup.

- Fixed issue where the toolbar could not be permanently hidden or shown using the toolbar context menu. Reported by Richard Spence.

- <TT>Python-Mode</TT> has been updated to version 6.0.2.
Suggested by Gilles Lenfant.

- <TT>Matlab-Mode</TT> has been updated to version 3.3.1.
Suggested by Dennis Rosset.

## 2.3

- Compatibility fixes (title and toolbar in windows) with Mac OS X 10.7 ``Lion''. Patch by Bob Halley and Jan Dj&#228;rv.

- Correct substantial display problems that occured when  the cursor type was set to `box' shape. Reported by many people (thanks).

- Enable Services menu functionality. Patch by Jan Dj&#228;rv.

- Display text behind a filled box cursor in the background color.

- Allow `cursor-type' to be set to (bar . WIDTH) with an arbitrarily large width.
Reported by Konrad Podczeck.

- Fix insertion of the Euro sign with Option-e under emulate-mac-*-keyboard-mode.
Reported by Viktor Rosenfeld.

- Updated ESS (Emacs Speaks Statistics) to version 5.13.

- 2.3a: Fixed regression involving selecting text and yanking (pasting) from the clipboard.
Reported by Marinos Koutsomichalis and Tom van Vleck.

## 1.0a

- Java support has just gotten a lot better. JDEE is a complete, integrated development environment for Java in Emacs. It supports building, source-level debugging, code generation and much more. Aquamacs now contains the latest version of JDEE, configured to work with the Java SDK installed via Apple's Developer Tools.

- Toolbar: The icons have been completely redesigned. The colors make them easy to distinguish.  The functions available from the standard toolbar have been carefully selected.   Using the Options -&gt; Show/Hide -&gt; Toolbar items menu, icons may be shown or hidden to fit the user's needs.

	Available functions:
			
	- New, open, save/save as, revert buffer
	- Undo, redo
	- Cut/copy/paste
	- Find (isearch)
	- Spell-check buffer (ispell-buffer)
	- Print
	- Make a new frame
	- Preferences
	- Help

- Spell-Checking can now be found in the Edit menu, not in Tools. The "Check As You Type" function (flyspell-mode) will automatically check the buffer contents (unless it's a big buffer) when first enabled.

- Spell-Checking now supports the popular cocoAspell package, which includes English language dictionaries and the GNU Aspell spell-checking library. Additional dictionaries may be installed.

- Formatting (filling) text with M-q (Option-q) is a bit more convenient now: when a region is selected, the command applies to the whole region and not just to a paragraph. We also provide M-Q (Option-Shift-q) to "unfill" a paragraph or a region, which comes in handy when wrapped text needs to be converted to soft-wrapped text, or to copy&amp;paste it into other applications.

- one-buffer-one-frame-mode is more compatible to the normal Emacs paradigm of one-frame-many-buffers for internal technical reasons, but also with respect to whether newly opened frames (windows) are actually selected and receive the following user inputs. In many situations, classical Emacs shows a buffer in an extra window, but doesn't select it - so the user can keep working on the original document. Aquamacs will now do the same - it will raise the appropriate frame, but not select it. If you would like to make it select at all newly opened frames, use this in your Preferences.el: `setq display-buffer-reuse-frames 'select'`
Also (the technical change): Function `switch-to-buffer' will set the current buffer immediately without waiting for the next top-level event loop.)  Thanks to Lowell Vaughn for pointing out a seemingly unimportant bug in one of Emacs' on-board games, which led to the discovery of this issue.

- Undo as in the original Emacs is available again via `undo'. Apple-Z and Apple-Shift-Z are bound to Aquamacs undo/redo functions (now called `aquamacs-undo/redo' as they used to be, but seasoned Emacs users may now use Control-underscore to access the classical undo. The difference is that the old-school undo will undo it's own undo steps.  Suggested by Rudi Schlatte

- Undo (aquamacs-undo, Apple-Z) will now restore point and mark as appropriate.

- Left/Right keys will now behave more Mac-like, whenever text is marked (i.e. the mark is active / text has been selected). They now move to the beginning or the end of that region, respectively. To turn off this behavior, turn off CUA mode or rebind  left/right keys in osx-key-low-priority-key-map by adding this to your Preferences.el or .emacs file: 
	- (define-key osx-key-low-priority-key-map [left] 'backward-char)
	- (define-key osx-key-low-priority-key-map [right] 'forward-char)
	- (osx-key-mode 1)

- Apple-2 can now be used to split the window into two (like C-x2), Apple-1 will undo that split (like C-x 1).

- Cut/Copy/Paste with the secondary selection (use Option + mouse) are now bound to Option-Apple-X, Option-Apple-C, respectively (unless Option is not Meta, in which case you'd use ESC Apple C, or whatever M-A-c is for you.)  (This is to avoid problems in cases when Caps Lock is on, which is recognized as Shift modifier.)

- The current major mode may be changed in the context menu

- Emulate-Mac-German|Italian|...-Keyboard-Modes now allow you to call the commands bound to the original Meta key combinations using the "Esc" key. For example, in the German keyboard emulation, pressing Option-l will give you @, while Esc l will do `downcase-word'. Also, this mode now supports searching (Apple-F) with `isearch'. Reported by Thomas K&#228;ufl. Additionally, an emulation mode for the Finnish keyboard layout is available now. Patch by Lauri Raittila.

- Default colors in help and *Messages* frames/buffers revised. Suggested by Charles Bailey

- Recently opened files that were opened from the "Recent Files" menu, or from an external shell with the 'open' command or something similar are now available in the minibuffer history that one gets with C-x C-f &lt;up&gt;.

- Clicking into raised frames (windows) that are not the selected frame (i.e. have grey instead of red-yellow-green buttons) will now activate that frame. Patch by Yamamoto Mitsuharu

- Creator codes for loaded files are maintained and not always reset to the Aquamacs / Emacs code. This way, users may use the Finder to open specific files with another application by default, but still edit the file in Aquamacs.

- Updated AUCTeX (11.84). [M-x latex-mode]. XeTeX users: please customize `TeX-command-list' to call XeTeX directly.

- Haskell mode included (2.3). [M-x haskell-mode]

- RubyOnRails support via emacs-rails included (0.5.3) [M-x rails-minor-mode, with M-x ruby-mode]

- ACT-R support. [M-x actr-mode]

- Menu Bar fixes. (Disabled menu bar entries when frames invisible.)

- Aquamacs menu name shortened. Suggested by Enrico Franconi

- Accessibility in OS X fixes (simulated clicks on Window elements) Suggested by Alexis Gallagher Patch by Yamamoto Mitsuharu

- HTML files (and others) can be opened in the system's default browser again. This applies to C-c C-z v in html-helper-mode and other modes using `browse-url'.

- Tramp files (i.e. remote files loaded with `/uid@host:/path/to/file` syntax are noted in the "recent files" history list and not discarded any longer when Aquamacs is restarted.

- Some documentation of Emacs functions (C-h f setq RET, e.g.) was not available on PPC Macs. Reported by David Sagan and Bill Rising.

- Some additional executables like movemail did not work on PPC Macs.
Reported by Barbara Shirtcliff.

## 1.0b

- Moving the point left or right with the arrow keys could cause an error message ``Mark inactive'' to appear in certain circumstances. Reported by Michel Charpentier. Thanks for supplying build machines: Toby Blake (U Edinburgh), James Pringle (U New Hampshire) and Carlo Gandolfi (Milan).

- M-x tile-frames-horizontally/vertically fixed. Patch by Ben Hyde. Updated to new `oneonone' library version, code by Drew Adams.

- Gnus did not work correctly. Reported by Martin J&#248;rgensen.

- On older PPC Macs, text input was only updated slowly whenever the tool-bar (icons at the top of the frame) was turned on.

- The underlying source code is now fixed to be GNU Emacs 22.1 plus Aquamacs extensions. 

- Ruby-mode included in new-buffer/change major mode menu
