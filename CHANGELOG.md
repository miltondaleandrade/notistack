## 0.4.1
###### To be published

Thanks to all contributers who improved notistack by opening an issue/PR.

**@Ang-YC @james-cordeiro**
* Better performance when user enqueues too many snackbars at once. [#15](https://github.com/iamhosseindhv/notistack/pull/15)
* Add support to close snackbars programmatically [#20](https://github.com/iamhosseindhv/notistack/issues/20)



## 0.3.9
###### Nov 29, 2018

### `notistack@0.4.0`
* Fix issue where we couldn't add custom variant icon of type string (like emojies).


## 0.3.9
###### Nov 20, 2018

### `notistack@0.3.9`
Thanks to all contributers who improved notistack by opening an issue/PR. 

**@nowaalex @nocksapp @nijk @ysgk**
* Add support for `onExited` and `onClose` props. [#21](https://github.com/iamhosseindhv/notistack/pull/21)
* Add support to pass `children` via `enqueueSnackbar`. [#23](https://github.com/iamhosseindhv/notistack/pull/23)
* Support for enqueueing multiple snackbars at once. [#14](https://github.com/iamhosseindhv/notistack/issues/14)
* Fix bug "Uncaught Error". [#26](https://github.com/iamhosseindhv/notistack/issues/26)


## 0.3.8
###### Nov 19, 2018

### `notistack@0.3.8`
Thanks to all contributers who improved notistack by opening an issue/PR. 

**@BornaP @pantharshit00**
* Fix bug where user couldn't apply css classes to mui-Snackbar `classes.root`. [#11](https://github.com/iamhosseindhv/notistack/issues/11)
* Smaller default icon variants so they don't make snackbars larger in height.
* Remove material-ui Typography `v2` warnings. [#19](https://github.com/iamhosseindhv/notistack/issues/19)

## 0.3.7
###### Oct 22, 2018

### `notistack@0.3.7`
* **More customisation**: 
  * New prop hideIconVariant to hide iconVariant.
  * Set variant of a snackbar to default, (which is the default value) and you'll have a naked snackbar ready to be customised.
  * Using classes property, specify the styles applied to snackbars when variant is set to success, error, warning or info,

* **Support for actions**:
  * Add action to all of the snackbars, or an individual snackbar.

* **New feature**:
  * Customise snackbars individually, by options parameter of enqueueSnackbar method.

