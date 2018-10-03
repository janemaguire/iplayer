define(
  "sampleapp/appui/components/menucomponent",
  [
    "antie/widgets/button",
    "antie/widgets/component",
    "antie/datasource",
    "antie/widgets/label",
    "antie/widgets/carousel",
    "antie/widgets/carousel/binder",
    "antie/widgets/carousel/keyhandlers/activatefirsthandler",
    "antie/widgets/carousel/strips/wrappingstrip",
    "antie/widgets/carousel/navigators/wrappingnavigator",
    "antie/widgets/carousel/strips/cullingstrip",
    "antie/widgets/carousel/strips/hidingstrip"
  ],
  function (
    Button,
    Component,
    DataSource,
    Label,
    Carousel,
    Binder,
    ActivateFirstHandler,
    WrappingStrip,
    WrappingNavigator,
    CullingStrip,
    HidingStrip) {

    return Component.extend({
      init: function init () {

        var self;
        self = this;

        init.base.call(this, 'menuComponent');

        var title = new Label("helloWorldLabel", "This is the menu page");
        this.appendChildWidget(title);

        var subtitle = new Label("welcomeLabel", "Welcome to the flippin menu");
        this.appendChildWidget(subtitle);

        var buttonOne = new Button("button-one");
        this.appendChildWidget(buttonOne);
        buttonOne.appendChildWidget(new Label("YO YO YO"))

      }
  })
});
