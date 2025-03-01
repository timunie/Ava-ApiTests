// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  documentationSidebar: [
        {
          'type': 'category',
          'label': '📂 Avalonia Namespaces',
          'link': {type: 'doc', id: 'G_Avalonia'},
          'items': [
            {
              'type': 'category',
              'label': 'Avalonia Namespace',
              'collapsed': true,
              'link': {type: 'doc', id: 'N_Avalonia'},
              'items': [
                {
                  'type': 'doc',
                  'label': 'AppBuilder Class',
                  'id': 'T_Avalonia_AppBuilder',
                }
,
                {
                  'type': 'doc',
                  'label': 'AppBuilder.AppMainDelegate Delegate',
                  'id': 'T_Avalonia_AppBuilder_AppMainDelegate',
                }
,
                {
                  'type': 'doc',
                  'label': 'Application Class',
                  'id': 'T_Avalonia_Application',
                }
,
                {
                  'type': 'doc',
                  'label': 'ClassicDesktopStyleApplicationLifetimeExtensions Class',
                  'id': 'T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions',
                }
,
                {
                  'type': 'doc',
                  'label': 'LoggingExtensions Class',
                  'id': 'T_Avalonia_LoggingExtensions',
                }
,
                {
                  'type': 'doc',
                  'label': 'SystemFontAppBuilderExtension Class',
                  'id': 'T_Avalonia_SystemFontAppBuilderExtension',
                }
,
                {
                  'type': 'doc',
                  'label': 'UrlOpenedEventArgs Class',
                  'id': 'T_Avalonia_UrlOpenedEventArgs',
                }

              ]
            },
            {
              'type': 'category',
              'label': '📂 Avalonia.Automation Namespaces',
              'link': {type: 'doc', id: 'G_Avalonia_Automation'},
              'items': [
                {
                  'type': 'category',
                  'label': 'Avalonia.Automation Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Automation'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'AccessibilityView Enumeration',
                      'id': 'T_Avalonia_Automation_AccessibilityView',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutomationElementIdentifiers Class',
                      'id': 'T_Avalonia_Automation_AutomationElementIdentifiers',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutomationLiveSetting Enumeration',
                      'id': 'T_Avalonia_Automation_AutomationLiveSetting',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutomationProperties Class',
                      'id': 'T_Avalonia_Automation_AutomationProperties',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutomationProperty Class',
                      'id': 'T_Avalonia_Automation_AutomationProperty',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutomationPropertyChangedEventArgs Class',
                      'id': 'T_Avalonia_Automation_AutomationPropertyChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ElementNotEnabledException Class',
                      'id': 'T_Avalonia_Automation_ElementNotEnabledException',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ExpandCollapsePatternIdentifiers Class',
                      'id': 'T_Avalonia_Automation_ExpandCollapsePatternIdentifiers',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ExpandCollapseState Enumeration',
                      'id': 'T_Avalonia_Automation_ExpandCollapseState',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IsOffscreenBehavior Enumeration',
                      'id': 'T_Avalonia_Automation_IsOffscreenBehavior',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RangeValuePatternIdentifiers Class',
                      'id': 'T_Avalonia_Automation_RangeValuePatternIdentifiers',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollPatternIdentifiers Class',
                      'id': 'T_Avalonia_Automation_ScrollPatternIdentifiers',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionItemPatternIdentifiers Class',
                      'id': 'T_Avalonia_Automation_SelectionItemPatternIdentifiers',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionPatternIdentifiers Class',
                      'id': 'T_Avalonia_Automation_SelectionPatternIdentifiers',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Automation.Peers Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Automation_Peers'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'AutomationControlType Enumeration',
                      'id': 'T_Avalonia_Automation_Peers_AutomationControlType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_AutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ButtonAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ButtonAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ComboBoxAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ComboBoxAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContentControlAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ContentControlAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ControlAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ControlAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ItemsControlAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ItemsControlAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ListItemAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ListItemAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuItemAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_MenuItemAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NoneAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_NoneAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_PopupAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupRootAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_PopupRootAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RangeBaseAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_RangeBaseAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollBarAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ScrollBarAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollViewerAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ScrollViewerAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectingItemsControlAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextBlockAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_TextBlockAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextBoxAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_TextBoxAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToggleButtonAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_ToggleButtonAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TreeViewAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_TreeViewAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TreeViewItemAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_TreeViewItemAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'UnrealizedElementAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_UnrealizedElementAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_WindowAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowBaseAutomationPeer Class',
                      'id': 'T_Avalonia_Automation_Peers_WindowBaseAutomationPeer',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Automation.Provider Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Automation_Provider'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'IEmbeddedRootProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IEmbeddedRootProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IExpandCollapseProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IExpandCollapseProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IInvokeProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IInvokeProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IRangeValueProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IRangeValueProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IRootProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IRootProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IScrollProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IScrollProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ISelectionItemProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_ISelectionItemProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ISelectionProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_ISelectionProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IToggleProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IToggleProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IValueProvider Interface',
                      'id': 'T_Avalonia_Automation_Provider_IValueProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollAmount Enumeration',
                      'id': 'T_Avalonia_Automation_Provider_ScrollAmount',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToggleState Enumeration',
                      'id': 'T_Avalonia_Automation_Provider_ToggleState',
                    }

                  ]
                }
              ]
            },
            {
              'type': 'category',
              'label': '📂 Avalonia.Controls Namespaces',
              'link': {type: 'doc', id: 'G_Avalonia_Controls'},
              'items': [
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'AcrylicPlatformCompensationLevels Structure',
                      'id': 'T_Avalonia_Controls_AcrylicPlatformCompensationLevels',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutoCompleteBox Class',
                      'id': 'T_Avalonia_Controls_AutoCompleteBox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutoCompleteBox.BindingEvaluator<T> Class',
                      'id': 'T_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutoCompleteFilterMode Enumeration',
                      'id': 'T_Avalonia_Controls_AutoCompleteFilterMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutoCompleteFilterPredicate<T> Delegate',
                      'id': 'T_Avalonia_Controls_AutoCompleteFilterPredicate_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AutoCompleteSelector<T> Delegate',
                      'id': 'T_Avalonia_Controls_AutoCompleteSelector_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Border Class',
                      'id': 'T_Avalonia_Controls_Border',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Button Class',
                      'id': 'T_Avalonia_Controls_Button',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ButtonSpinner Class',
                      'id': 'T_Avalonia_Controls_ButtonSpinner',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Calendar Class',
                      'id': 'T_Avalonia_Controls_Calendar',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarDateChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_CalendarDateChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarDatePicker Class',
                      'id': 'T_Avalonia_Controls_CalendarDatePicker',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarDatePickerDateValidationErrorEventArgs Class',
                      'id': 'T_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarDatePickerFormat Enumeration',
                      'id': 'T_Avalonia_Controls_CalendarDatePickerFormat',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarDateRange Class',
                      'id': 'T_Avalonia_Controls_CalendarDateRange',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarMode Enumeration',
                      'id': 'T_Avalonia_Controls_CalendarMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarModeChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_CalendarModeChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarSelectionMode Enumeration',
                      'id': 'T_Avalonia_Controls_CalendarSelectionMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Canvas Class',
                      'id': 'T_Avalonia_Controls_Canvas',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Carousel Class',
                      'id': 'T_Avalonia_Controls_Carousel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CheckBox Class',
                      'id': 'T_Avalonia_Controls_CheckBox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ClickMode Enumeration',
                      'id': 'T_Avalonia_Controls_ClickMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ColumnDefinition Class',
                      'id': 'T_Avalonia_Controls_ColumnDefinition',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ColumnDefinitions Class',
                      'id': 'T_Avalonia_Controls_ColumnDefinitions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ComboBox Class',
                      'id': 'T_Avalonia_Controls_ComboBox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ComboBoxItem Class',
                      'id': 'T_Avalonia_Controls_ComboBoxItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContainerClearingEventArgs Class',
                      'id': 'T_Avalonia_Controls_ContainerClearingEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContainerIndexChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ContainerIndexChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContainerPreparedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ContainerPreparedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContentControl Class',
                      'id': 'T_Avalonia_Controls_ContentControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContextMenu Class',
                      'id': 'T_Avalonia_Controls_ContextMenu',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ContextRequestedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ContextRequestedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Control Class',
                      'id': 'T_Avalonia_Controls_Control',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ControlExtensions Class',
                      'id': 'T_Avalonia_Controls_ControlExtensions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Controls Class',
                      'id': 'T_Avalonia_Controls_Controls',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DataValidationErrors Class',
                      'id': 'T_Avalonia_Controls_DataValidationErrors',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DatePicker Class',
                      'id': 'T_Avalonia_Controls_DatePicker',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DatePickerPresenter Class',
                      'id': 'T_Avalonia_Controls_DatePickerPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DatePickerSelectedValueChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_DatePickerSelectedValueChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Decorator Class',
                      'id': 'T_Avalonia_Controls_Decorator',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DefinitionBase Class',
                      'id': 'T_Avalonia_Controls_DefinitionBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DefinitionList<T> Class',
                      'id': 'T_Avalonia_Controls_DefinitionList_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Design Class',
                      'id': 'T_Avalonia_Controls_Design',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DesktopApplicationExtensions Class',
                      'id': 'T_Avalonia_Controls_DesktopApplicationExtensions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Dock Enumeration',
                      'id': 'T_Avalonia_Controls_Dock',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DockPanel Class',
                      'id': 'T_Avalonia_Controls_DockPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DropDownButton Class',
                      'id': 'T_Avalonia_Controls_DropDownButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ExpandDirection Enumeration',
                      'id': 'T_Avalonia_Controls_ExpandDirection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Expander Class',
                      'id': 'T_Avalonia_Controls_Expander',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ExperimentalAcrylicBorder Class',
                      'id': 'T_Avalonia_Controls_ExperimentalAcrylicBorder',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Flyout Class',
                      'id': 'T_Avalonia_Controls_Flyout',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FlyoutPresenter Class',
                      'id': 'T_Avalonia_Controls_FlyoutPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FlyoutShowMode Enumeration',
                      'id': 'T_Avalonia_Controls_FlyoutShowMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Grid Class',
                      'id': 'T_Avalonia_Controls_Grid',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'GridLength Structure',
                      'id': 'T_Avalonia_Controls_GridLength',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'GridResizeBehavior Enumeration',
                      'id': 'T_Avalonia_Controls_GridResizeBehavior',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'GridResizeDirection Enumeration',
                      'id': 'T_Avalonia_Controls_GridResizeDirection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'GridSplitter Class',
                      'id': 'T_Avalonia_Controls_GridSplitter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'GridUnitType Enumeration',
                      'id': 'T_Avalonia_Controls_GridUnitType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'HotKeyManager Class',
                      'id': 'T_Avalonia_Controls_HotKeyManager',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'HyperlinkButton Class',
                      'id': 'T_Avalonia_Controls_HyperlinkButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IconElement Class',
                      'id': 'T_Avalonia_Controls_IconElement',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IGlobalDataTemplates Interface',
                      'id': 'T_Avalonia_Controls_IGlobalDataTemplates',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Image Class',
                      'id': 'T_Avalonia_Controls_Image',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeMenuExporterEventsImplBridge Interface',
                      'id': 'T_Avalonia_Controls_INativeMenuExporterEventsImplBridge',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeMenuItemExporterEventsImplBridge Interface',
                      'id': 'T_Avalonia_Controls_INativeMenuItemExporterEventsImplBridge',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IScrollAnchorProvider Interface',
                      'id': 'T_Avalonia_Controls_IScrollAnchorProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ISelectable Interface',
                      'id': 'T_Avalonia_Controls_ISelectable',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ItemCollection Class',
                      'id': 'T_Avalonia_Controls_ItemCollection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ITemplate<TControl> Interface',
                      'id': 'T_Avalonia_Controls_ITemplate_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ItemsControl Class',
                      'id': 'T_Avalonia_Controls_ItemsControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ItemsSourceView Class',
                      'id': 'T_Avalonia_Controls_ItemsSourceView',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ItemsSourceView<T> Class',
                      'id': 'T_Avalonia_Controls_ItemsSourceView_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Label Class',
                      'id': 'T_Avalonia_Controls_Label',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'LayoutTransformControl Class',
                      'id': 'T_Avalonia_Controls_LayoutTransformControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ListBox Class',
                      'id': 'T_Avalonia_Controls_ListBox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ListBoxItem Class',
                      'id': 'T_Avalonia_Controls_ListBoxItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Location Enumeration',
                      'id': 'T_Avalonia_Controls_Location',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MacOSProperties Class',
                      'id': 'T_Avalonia_Controls_MacOSProperties',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MaskedTextBox Class',
                      'id': 'T_Avalonia_Controls_MaskedTextBox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Menu Class',
                      'id': 'T_Avalonia_Controls_Menu',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuBase Class',
                      'id': 'T_Avalonia_Controls_MenuBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuFlyout Class',
                      'id': 'T_Avalonia_Controls_MenuFlyout',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuFlyoutPresenter Class',
                      'id': 'T_Avalonia_Controls_MenuFlyoutPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuItem Class',
                      'id': 'T_Avalonia_Controls_MenuItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuItemToggleType Enumeration',
                      'id': 'T_Avalonia_Controls_MenuItemToggleType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeControlHost Class',
                      'id': 'T_Avalonia_Controls_NativeControlHost',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeMenu Class',
                      'id': 'T_Avalonia_Controls_NativeMenu',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeMenuBar Class',
                      'id': 'T_Avalonia_Controls_NativeMenuBar',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeMenuItem Class',
                      'id': 'T_Avalonia_Controls_NativeMenuItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeMenuItemBase Class',
                      'id': 'T_Avalonia_Controls_NativeMenuItemBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeMenuItemSeparator Class',
                      'id': 'T_Avalonia_Controls_NativeMenuItemSeparator',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NativeMenuItemToggleType Enumeration',
                      'id': 'T_Avalonia_Controls_NativeMenuItemToggleType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NumericUpDown Class',
                      'id': 'T_Avalonia_Controls_NumericUpDown',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NumericUpDownValueChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_NumericUpDownValueChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Panel Class',
                      'id': 'T_Avalonia_Controls_Panel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PathIcon Class',
                      'id': 'T_Avalonia_Controls_PathIcon',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PixelPointEventArgs Class',
                      'id': 'T_Avalonia_Controls_PixelPointEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PlacementMode Enumeration',
                      'id': 'T_Avalonia_Controls_PlacementMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PlatformInhibitionType Enumeration',
                      'id': 'T_Avalonia_Controls_PlatformInhibitionType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopulatedEventArgs Class',
                      'id': 'T_Avalonia_Controls_PopulatedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopulatingEventArgs Class',
                      'id': 'T_Avalonia_Controls_PopulatingEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ProgressBar Class',
                      'id': 'T_Avalonia_Controls_ProgressBar',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ProgressBar.ProgressBarTemplateSettings Class',
                      'id': 'T_Avalonia_Controls_ProgressBar_ProgressBarTemplateSettings',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RadioButton Class',
                      'id': 'T_Avalonia_Controls_RadioButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RefreshCompletionDeferral Class',
                      'id': 'T_Avalonia_Controls_RefreshCompletionDeferral',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RefreshContainer Class',
                      'id': 'T_Avalonia_Controls_RefreshContainer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RefreshRequestedEventArgs Class',
                      'id': 'T_Avalonia_Controls_RefreshRequestedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RefreshVisualizer Class',
                      'id': 'T_Avalonia_Controls_RefreshVisualizer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RefreshVisualizerOrientation Enumeration',
                      'id': 'T_Avalonia_Controls_RefreshVisualizerOrientation',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RefreshVisualizerState Enumeration',
                      'id': 'T_Avalonia_Controls_RefreshVisualizerState',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RelativePanel Class',
                      'id': 'T_Avalonia_Controls_RelativePanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RepeatButton Class',
                      'id': 'T_Avalonia_Controls_RepeatButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RequestBringIntoViewEventArgs Class',
                      'id': 'T_Avalonia_Controls_RequestBringIntoViewEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ResolveByNameAttribute Class',
                      'id': 'T_Avalonia_Controls_ResolveByNameAttribute',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ReversibleStackPanel Class',
                      'id': 'T_Avalonia_Controls_ReversibleStackPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RowDefinition Class',
                      'id': 'T_Avalonia_Controls_RowDefinition',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RowDefinitions Class',
                      'id': 'T_Avalonia_Controls_RowDefinitions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Screens Class',
                      'id': 'T_Avalonia_Controls_Screens',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ScrollChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollViewer Class',
                      'id': 'T_Avalonia_Controls_ScrollViewer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectableTextBlock Class',
                      'id': 'T_Avalonia_Controls_SelectableTextBlock',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_SelectionChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionMode Enumeration',
                      'id': 'T_Avalonia_Controls_SelectionMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Separator Class',
                      'id': 'T_Avalonia_Controls_Separator',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ShutdownMode Enumeration',
                      'id': 'T_Avalonia_Controls_ShutdownMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SizeChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_SizeChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SizeToContent Enumeration',
                      'id': 'T_Avalonia_Controls_SizeToContent',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Slider Class',
                      'id': 'T_Avalonia_Controls_Slider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SpinDirection Enumeration',
                      'id': 'T_Avalonia_Controls_SpinDirection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SpinEventArgs Class',
                      'id': 'T_Avalonia_Controls_SpinEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Spinner Class',
                      'id': 'T_Avalonia_Controls_Spinner',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SplitButton Class',
                      'id': 'T_Avalonia_Controls_SplitButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SplitView Class',
                      'id': 'T_Avalonia_Controls_SplitView',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SplitViewDisplayMode Enumeration',
                      'id': 'T_Avalonia_Controls_SplitViewDisplayMode',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SplitViewPanePlacement Enumeration',
                      'id': 'T_Avalonia_Controls_SplitViewPanePlacement',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'StackPanel Class',
                      'id': 'T_Avalonia_Controls_StackPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SystemDecorations Enumeration',
                      'id': 'T_Avalonia_Controls_SystemDecorations',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TabControl Class',
                      'id': 'T_Avalonia_Controls_TabControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TabItem Class',
                      'id': 'T_Avalonia_Controls_TabItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextBlock Class',
                      'id': 'T_Avalonia_Controls_TextBlock',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextBlock.InlinesTextSource Structure',
                      'id': 'T_Avalonia_Controls_TextBlock_InlinesTextSource',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextBlock.SimpleTextSource Structure',
                      'id': 'T_Avalonia_Controls_TextBlock_SimpleTextSource',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextBox Class',
                      'id': 'T_Avalonia_Controls_TextBox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_TextChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextChangingEventArgs Class',
                      'id': 'T_Avalonia_Controls_TextChangingEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ThemeVariantScope Class',
                      'id': 'T_Avalonia_Controls_ThemeVariantScope',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TickBar Class',
                      'id': 'T_Avalonia_Controls_TickBar',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TickBarPlacement Enumeration',
                      'id': 'T_Avalonia_Controls_TickBarPlacement',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TickPlacement Enumeration',
                      'id': 'T_Avalonia_Controls_TickPlacement',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TimePicker Class',
                      'id': 'T_Avalonia_Controls_TimePicker',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TimePickerPresenter Class',
                      'id': 'T_Avalonia_Controls_TimePickerPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TimePickerSelectedValueChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_TimePickerSelectedValueChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToggleSplitButton Class',
                      'id': 'T_Avalonia_Controls_ToggleSplitButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToggleSwitch Class',
                      'id': 'T_Avalonia_Controls_ToggleSwitch',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToolTip Class',
                      'id': 'T_Avalonia_Controls_ToolTip',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TopLevel Class',
                      'id': 'T_Avalonia_Controls_TopLevel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TransitionCompletedEventArgs Class',
                      'id': 'T_Avalonia_Controls_TransitionCompletedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TransitioningContentControl Class',
                      'id': 'T_Avalonia_Controls_TransitioningContentControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TrayIcon Class',
                      'id': 'T_Avalonia_Controls_TrayIcon',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TrayIcons Class',
                      'id': 'T_Avalonia_Controls_TrayIcons',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TreeView Class',
                      'id': 'T_Avalonia_Controls_TreeView',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TreeViewItem Class',
                      'id': 'T_Avalonia_Controls_TreeViewItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'UserControl Class',
                      'id': 'T_Avalonia_Controls_UserControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ValidSpinDirections Enumeration',
                      'id': 'T_Avalonia_Controls_ValidSpinDirections',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Viewbox Class',
                      'id': 'T_Avalonia_Controls_Viewbox',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'VirtualizingCarouselPanel Class',
                      'id': 'T_Avalonia_Controls_VirtualizingCarouselPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'VirtualizingPanel Class',
                      'id': 'T_Avalonia_Controls_VirtualizingPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'VirtualizingStackPanel Class',
                      'id': 'T_Avalonia_Controls_VirtualizingStackPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Win32Properties Class',
                      'id': 'T_Avalonia_Controls_Win32Properties',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Win32Properties.CustomWindowStylesCallback Delegate',
                      'id': 'T_Avalonia_Controls_Win32Properties_CustomWindowStylesCallback',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Win32Properties.CustomWndProcHookCallback Delegate',
                      'id': 'T_Avalonia_Controls_Win32Properties_CustomWndProcHookCallback',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Window Class',
                      'id': 'T_Avalonia_Controls_Window',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowBase Class',
                      'id': 'T_Avalonia_Controls_WindowBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowCloseReason Enumeration',
                      'id': 'T_Avalonia_Controls_WindowCloseReason',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowClosingBehavior Enumeration',
                      'id': 'T_Avalonia_Controls_WindowClosingBehavior',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowClosingEventArgs Class',
                      'id': 'T_Avalonia_Controls_WindowClosingEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowEdge Enumeration',
                      'id': 'T_Avalonia_Controls_WindowEdge',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowIcon Class',
                      'id': 'T_Avalonia_Controls_WindowIcon',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowResizedEventArgs Class',
                      'id': 'T_Avalonia_Controls_WindowResizedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowResizeReason Enumeration',
                      'id': 'T_Avalonia_Controls_WindowResizeReason',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowStartupLocation Enumeration',
                      'id': 'T_Avalonia_Controls_WindowStartupLocation',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowState Enumeration',
                      'id': 'T_Avalonia_Controls_WindowState',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowTransparencyLevel Structure',
                      'id': 'T_Avalonia_Controls_WindowTransparencyLevel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowTransparencyLevelCollection Class',
                      'id': 'T_Avalonia_Controls_WindowTransparencyLevelCollection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WrapPanel Class',
                      'id': 'T_Avalonia_Controls_WrapPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'X11Properties Class',
                      'id': 'T_Avalonia_Controls_X11Properties',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.ApplicationLifetimes Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_ApplicationLifetimes'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'ActivatableLifetimeBase Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ActivatedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ActivatedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ActivationKind Enumeration',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ActivationKind',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ClassicDesktopStyleApplicationLifetime Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ClassicDesktopStyleApplicationLifetimeOptions Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetimeOptions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ControlledApplicationLifetimeExitEventArgs Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ControlledApplicationLifetimeExitEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ControlledApplicationLifetimeStartupEventArgs Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ControlledApplicationLifetimeStartupEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FileActivatedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_FileActivatedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IActivatableApplicationLifetime Interface',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_IActivatableApplicationLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IActivatableLifetime Interface',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IApplicationLifetime Interface',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IClassicDesktopStyleApplicationLifetime Interface',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IControlledApplicationLifetime Interface',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ISingleViewApplicationLifetime Interface',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ISingleViewApplicationLifetime',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ProtocolActivatedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ProtocolActivatedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ShutdownRequestedEventArgs Class',
                      'id': 'T_Avalonia_Controls_ApplicationLifetimes_ShutdownRequestedEventArgs',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Automation.Peers Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Automation_Peers'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'ImageAutomationPeer Class',
                      'id': 'T_Avalonia_Controls_Automation_Peers_ImageAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'LabelAutomationPeer Class',
                      'id': 'T_Avalonia_Controls_Automation_Peers_LabelAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ProgressBarAutomationPeer Class',
                      'id': 'T_Avalonia_Controls_Automation_Peers_ProgressBarAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RadioButtonAutomationPeer Class',
                      'id': 'T_Avalonia_Controls_Automation_Peers_RadioButtonAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SliderAutomationPeer Class',
                      'id': 'T_Avalonia_Controls_Automation_Peers_SliderAutomationPeer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ThumbAutomationPeer Class',
                      'id': 'T_Avalonia_Controls_Automation_Peers_ThumbAutomationPeer',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Chrome Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Chrome'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'CaptionButtons Class',
                      'id': 'T_Avalonia_Controls_Chrome_CaptionButtons',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TitleBar Class',
                      'id': 'T_Avalonia_Controls_Chrome_TitleBar',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Converters Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Converters'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'CornerRadiusFilterConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_CornerRadiusFilterConverter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CornerRadiusToDoubleConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_CornerRadiusToDoubleConverter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Corners Enumeration',
                      'id': 'T_Avalonia_Controls_Converters_Corners',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'EnumToBoolConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_EnumToBoolConverter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MarginMultiplierConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_MarginMultiplierConverter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MenuScrollingVisibilityConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_MenuScrollingVisibilityConverter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PlatformKeyGestureConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_PlatformKeyGestureConverter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'StringFormatConverter Class',
                      'id': 'T_Avalonia_Controls_Converters_StringFormatConverter',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Diagnostics Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Diagnostics'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'IPopupHostProvider Interface',
                      'id': 'T_Avalonia_Controls_Diagnostics_IPopupHostProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToolTipDiagnostics Class',
                      'id': 'T_Avalonia_Controls_Diagnostics_ToolTipDiagnostics',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Documents Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Documents'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'Bold Class',
                      'id': 'T_Avalonia_Controls_Documents_Bold',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Inline Class',
                      'id': 'T_Avalonia_Controls_Documents_Inline',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'InlineCollection Class',
                      'id': 'T_Avalonia_Controls_Documents_InlineCollection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'InlineUIContainer Class',
                      'id': 'T_Avalonia_Controls_Documents_InlineUIContainer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Italic Class',
                      'id': 'T_Avalonia_Controls_Documents_Italic',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'LineBreak Class',
                      'id': 'T_Avalonia_Controls_Documents_LineBreak',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Run Class',
                      'id': 'T_Avalonia_Controls_Documents_Run',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Span Class',
                      'id': 'T_Avalonia_Controls_Documents_Span',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextElement Class',
                      'id': 'T_Avalonia_Controls_Documents_TextElement',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Underline Class',
                      'id': 'T_Avalonia_Controls_Documents_Underline',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Embedding Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Embedding'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'EmbeddableControlRoot Class',
                      'id': 'T_Avalonia_Controls_Embedding_EmbeddableControlRoot',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Embedding.Offscreen Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Embedding_Offscreen'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'OffscreenTopLevelImplBase Class',
                      'id': 'T_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Generators Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Generators'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'ItemContainerGenerator Class',
                      'id': 'T_Avalonia_Controls_Generators_ItemContainerGenerator',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TreeContainerIndex Class',
                      'id': 'T_Avalonia_Controls_Generators_TreeContainerIndex',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TreeItemContainerGenerator Class',
                      'id': 'T_Avalonia_Controls_Generators_TreeItemContainerGenerator',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Mixins Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Mixins'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'PressedMixin Class',
                      'id': 'T_Avalonia_Controls_Mixins_PressedMixin',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectableMixin Class',
                      'id': 'T_Avalonia_Controls_Mixins_SelectableMixin',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Notifications Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Notifications'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'IManagedNotificationManager Interface',
                      'id': 'T_Avalonia_Controls_Notifications_IManagedNotificationManager',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INotification Interface',
                      'id': 'T_Avalonia_Controls_Notifications_INotification',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INotificationManager Interface',
                      'id': 'T_Avalonia_Controls_Notifications_INotificationManager',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Notification Class',
                      'id': 'T_Avalonia_Controls_Notifications_Notification',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NotificationCard Class',
                      'id': 'T_Avalonia_Controls_Notifications_NotificationCard',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NotificationPosition Enumeration',
                      'id': 'T_Avalonia_Controls_Notifications_NotificationPosition',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'NotificationType Enumeration',
                      'id': 'T_Avalonia_Controls_Notifications_NotificationType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'WindowNotificationManager Class',
                      'id': 'T_Avalonia_Controls_Notifications_WindowNotificationManager',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Platform Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Platform'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'DefaultMenuInteractionHandler Class',
                      'id': 'T_Avalonia_Controls_Platform_DefaultMenuInteractionHandler',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IInputPane Interface',
                      'id': 'T_Avalonia_Controls_Platform_IInputPane',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IInsetsManager Interface',
                      'id': 'T_Avalonia_Controls_Platform_IInsetsManager',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IMenuInteractionHandler Interface',
                      'id': 'T_Avalonia_Controls_Platform_IMenuInteractionHandler',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IMountedVolumeInfoProvider Interface',
                      'id': 'T_Avalonia_Controls_Platform_IMountedVolumeInfoProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeControlHostControlTopLevelAttachment Interface',
                      'id': 'T_Avalonia_Controls_Platform_INativeControlHostControlTopLevelAttachment',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeControlHostDestroyableControlHandle Interface',
                      'id': 'T_Avalonia_Controls_Platform_INativeControlHostDestroyableControlHandle',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeControlHostImpl Interface',
                      'id': 'T_Avalonia_Controls_Platform_INativeControlHostImpl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeMenuExporter Interface',
                      'id': 'T_Avalonia_Controls_Platform_INativeMenuExporter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'INativeMenuExporterProvider Interface',
                      'id': 'T_Avalonia_Controls_Platform_INativeMenuExporterProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'InputPaneBase Class',
                      'id': 'T_Avalonia_Controls_Platform_InputPaneBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'InputPaneState Enumeration',
                      'id': 'T_Avalonia_Controls_Platform_InputPaneState',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'InputPaneStateEventArgs Class',
                      'id': 'T_Avalonia_Controls_Platform_InputPaneStateEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'InsetsManagerBase Class',
                      'id': 'T_Avalonia_Controls_Platform_InsetsManagerBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IStorageProviderFactory Interface',
                      'id': 'T_Avalonia_Controls_Platform_IStorageProviderFactory',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ITopLevelNativeMenuExporter Interface',
                      'id': 'T_Avalonia_Controls_Platform_ITopLevelNativeMenuExporter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IWin32OptionsTopLevelImpl Interface',
                      'id': 'T_Avalonia_Controls_Platform_IWin32OptionsTopLevelImpl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IX11OptionsToplevelImplFeature Interface',
                      'id': 'T_Avalonia_Controls_Platform_IX11OptionsToplevelImplFeature',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ManagedDispatcherImpl Class',
                      'id': 'T_Avalonia_Controls_Platform_ManagedDispatcherImpl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ManagedDispatcherImpl.IManagedDispatcherInputProvider Interface',
                      'id': 'T_Avalonia_Controls_Platform_ManagedDispatcherImpl_IManagedDispatcherInputProvider',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'MountedVolumeInfo Class',
                      'id': 'T_Avalonia_Controls_Platform_MountedVolumeInfo',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PlatformManager Class',
                      'id': 'T_Avalonia_Controls_Platform_PlatformManager',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SafeAreaChangedArgs Class',
                      'id': 'T_Avalonia_Controls_Platform_SafeAreaChangedArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SystemBarTheme Enumeration',
                      'id': 'T_Avalonia_Controls_Platform_SystemBarTheme',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'X11NetWmWindowType Enumeration',
                      'id': 'T_Avalonia_Controls_Platform_X11NetWmWindowType',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Platform.Surfaces Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Platform_Surfaces'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'FramebufferLockProperties Structure',
                      'id': 'T_Avalonia_Controls_Platform_Surfaces_FramebufferLockProperties',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncFramebufferRenderTarget Class',
                      'id': 'T_Avalonia_Controls_Platform_Surfaces_FuncFramebufferRenderTarget',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IFramebufferPlatformSurface Interface',
                      'id': 'T_Avalonia_Controls_Platform_Surfaces_IFramebufferPlatformSurface',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IFramebufferRenderTarget Interface',
                      'id': 'T_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTarget',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IFramebufferRenderTargetWithProperties Interface',
                      'id': 'T_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTargetWithProperties',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Presenters Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Presenters'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'ContentPresenter Class',
                      'id': 'T_Avalonia_Controls_Presenters_ContentPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ItemsPresenter Class',
                      'id': 'T_Avalonia_Controls_Presenters_ItemsPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollContentPresenter Class',
                      'id': 'T_Avalonia_Controls_Presenters_ScrollContentPresenter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextPresenter Class',
                      'id': 'T_Avalonia_Controls_Presenters_TextPresenter',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Primitives Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Primitives'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'AccessText Class',
                      'id': 'T_Avalonia_Controls_Primitives_AccessText',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'AdornerLayer Class',
                      'id': 'T_Avalonia_Controls_Primitives_AdornerLayer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarBlackoutDatesCollection Class',
                      'id': 'T_Avalonia_Controls_Primitives_CalendarBlackoutDatesCollection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarButton Class',
                      'id': 'T_Avalonia_Controls_Primitives_CalendarButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarDayButton Class',
                      'id': 'T_Avalonia_Controls_Primitives_CalendarDayButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CalendarItem Class',
                      'id': 'T_Avalonia_Controls_Primitives_CalendarItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ChromeOverlayLayer Class',
                      'id': 'T_Avalonia_Controls_Primitives_ChromeOverlayLayer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DateTimePickerPanel Class',
                      'id': 'T_Avalonia_Controls_Primitives_DateTimePickerPanel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DateTimePickerPanelType Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_DateTimePickerPanelType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FlyoutBase Class',
                      'id': 'T_Avalonia_Controls_Primitives_FlyoutBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'HeaderedContentControl Class',
                      'id': 'T_Avalonia_Controls_Primitives_HeaderedContentControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'HeaderedItemsControl Class',
                      'id': 'T_Avalonia_Controls_Primitives_HeaderedItemsControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'HeaderedSelectingItemsControl Class',
                      'id': 'T_Avalonia_Controls_Primitives_HeaderedSelectingItemsControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ILogicalScrollable Interface',
                      'id': 'T_Avalonia_Controls_Primitives_ILogicalScrollable',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IPopupHost Interface',
                      'id': 'T_Avalonia_Controls_Primitives_IPopupHost',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IScrollable Interface',
                      'id': 'T_Avalonia_Controls_Primitives_IScrollable',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IScrollSnapPointsInfo Interface',
                      'id': 'T_Avalonia_Controls_Primitives_IScrollSnapPointsInfo',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'LightDismissOverlayLayer Class',
                      'id': 'T_Avalonia_Controls_Primitives_LightDismissOverlayLayer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'OverlayLayer Class',
                      'id': 'T_Avalonia_Controls_Primitives_OverlayLayer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'OverlayPopupHost Class',
                      'id': 'T_Avalonia_Controls_Primitives_OverlayPopupHost',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PickerPresenterBase Class',
                      'id': 'T_Avalonia_Controls_Primitives_PickerPresenterBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Popup Class',
                      'id': 'T_Avalonia_Controls_Primitives_Popup',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupFlyoutBase Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupFlyoutBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupRoot Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupRoot',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RangeBase Class',
                      'id': 'T_Avalonia_Controls_Primitives_RangeBase',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RangeBaseValueChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_Primitives_RangeBaseValueChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollBar Class',
                      'id': 'T_Avalonia_Controls_Primitives_ScrollBar',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollBarVisibility Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_ScrollBarVisibility',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollEventArgs Class',
                      'id': 'T_Avalonia_Controls_Primitives_ScrollEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ScrollEventType Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_ScrollEventType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectedDatesCollection Class',
                      'id': 'T_Avalonia_Controls_Primitives_SelectedDatesCollection',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectingItemsControl Class',
                      'id': 'T_Avalonia_Controls_Primitives_SelectingItemsControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionHandleType Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_SelectionHandleType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SnapPointsAlignment Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_SnapPointsAlignment',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SnapPointsType Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_SnapPointsType',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SplitViewTemplateSettings Class',
                      'id': 'T_Avalonia_Controls_Primitives_SplitViewTemplateSettings',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TabStrip Class',
                      'id': 'T_Avalonia_Controls_Primitives_TabStrip',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TabStripItem Class',
                      'id': 'T_Avalonia_Controls_Primitives_TabStripItem',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TemplateAppliedEventArgs Class',
                      'id': 'T_Avalonia_Controls_Primitives_TemplateAppliedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TemplatedControl Class',
                      'id': 'T_Avalonia_Controls_Primitives_TemplatedControl',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextSearch Class',
                      'id': 'T_Avalonia_Controls_Primitives_TextSearch',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextSelectionHandle Class',
                      'id': 'T_Avalonia_Controls_Primitives_TextSelectionHandle',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TextSelectorLayer Class',
                      'id': 'T_Avalonia_Controls_Primitives_TextSelectorLayer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Thumb Class',
                      'id': 'T_Avalonia_Controls_Primitives_Thumb',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ToggleButton Class',
                      'id': 'T_Avalonia_Controls_Primitives_ToggleButton',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Track Class',
                      'id': 'T_Avalonia_Controls_Primitives_Track',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'UniformGrid Class',
                      'id': 'T_Avalonia_Controls_Primitives_UniformGrid',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'VisualLayerManager Class',
                      'id': 'T_Avalonia_Controls_Primitives_VisualLayerManager',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Primitives.PopupPositioning Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Primitives_PopupPositioning'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'CustomPopupPlacement Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_CustomPopupPlacement',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'CustomPopupPlacementCallback Delegate',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_CustomPopupPlacementCallback',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IManagedPopupPositionerPopup Interface',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_IManagedPopupPositionerPopup',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IPopupPositioner Interface',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ManagedPopupPositioner Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositioner',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ManagedPopupPositionerPopupImplHelper Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositionerPopupImplHelper',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ManagedPopupPositionerPopupImplHelper.MoveResizeDelegate Delegate',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositionerPopupImplHelper_MoveResizeDelegate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ManagedPopupPositionerScreenInfo Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositionerScreenInfo',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupAnchor Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_PopupAnchor',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupGravity Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_PopupGravity',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupPositionerConstraintAdjustment Enumeration',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerConstraintAdjustment',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupPositionerParameters Structure',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'PopupPositionRequest Class',
                      'id': 'T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionRequest',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Remote Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Remote'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'RemoteServer Class',
                      'id': 'T_Avalonia_Controls_Remote_RemoteServer',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RemoteWidget Class',
                      'id': 'T_Avalonia_Controls_Remote_RemoteWidget',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'RemoteWidget.SizingMode Enumeration',
                      'id': 'T_Avalonia_Controls_Remote_RemoteWidget_SizingMode',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Selection Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Selection'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'ISelectionModel Interface',
                      'id': 'T_Avalonia_Controls_Selection_ISelectionModel',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModel<T> Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModel_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModel<T>.BatchUpdateOperation Structure',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModel_1_BatchUpdateOperation',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModelExtensions Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModelExtensions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModelExtensions.BatchUpdateOperation Structure',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModelExtensions_BatchUpdateOperation',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModelIndexesChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModelIndexesChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModelSelectionChangedEventArgs Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionModelSelectionChangedEventArgs<T> Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionNodeBase<T> Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionNodeBase_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectionNodeBase<T>.CollectionChangeState Class',
                      'id': 'T_Avalonia_Controls_Selection_SelectionNodeBase_1_CollectionChangeState',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Shapes Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Shapes'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'Arc Class',
                      'id': 'T_Avalonia_Controls_Shapes_Arc',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Ellipse Class',
                      'id': 'T_Avalonia_Controls_Shapes_Ellipse',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Line Class',
                      'id': 'T_Avalonia_Controls_Shapes_Line',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Path Class',
                      'id': 'T_Avalonia_Controls_Shapes_Path',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Polygon Class',
                      'id': 'T_Avalonia_Controls_Shapes_Polygon',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Polyline Class',
                      'id': 'T_Avalonia_Controls_Shapes_Polyline',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Rectangle Class',
                      'id': 'T_Avalonia_Controls_Shapes_Rectangle',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Sector Class',
                      'id': 'T_Avalonia_Controls_Shapes_Sector',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'Shape Class',
                      'id': 'T_Avalonia_Controls_Shapes_Shape',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Templates Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Templates'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'DataTemplateExtensions Class',
                      'id': 'T_Avalonia_Controls_Templates_DataTemplateExtensions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'DataTemplates Class',
                      'id': 'T_Avalonia_Controls_Templates_DataTemplates',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncControlTemplate Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncControlTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncControlTemplate<T> Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncControlTemplate_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncDataTemplate Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncDataTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncDataTemplate<T> Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncDataTemplate_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncTemplate<TControl> Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncTemplate_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncTemplate<TParam, TControl> Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncTemplate_2',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncTemplateNameScopeExtensions Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncTemplateNameScopeExtensions',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncTreeDataTemplate Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncTreeDataTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'FuncTreeDataTemplate<T> Class',
                      'id': 'T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IControlTemplate Interface',
                      'id': 'T_Avalonia_Controls_Templates_IControlTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IDataTemplate Interface',
                      'id': 'T_Avalonia_Controls_Templates_IDataTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IDataTemplateHost Interface',
                      'id': 'T_Avalonia_Controls_Templates_IDataTemplateHost',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'IRecyclingDataTemplate Interface',
                      'id': 'T_Avalonia_Controls_Templates_IRecyclingDataTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ITemplate<TParam, TControl> Interface',
                      'id': 'T_Avalonia_Controls_Templates_ITemplate_2',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ITreeDataTemplate Interface',
                      'id': 'T_Avalonia_Controls_Templates_ITreeDataTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ITypedDataTemplate Interface',
                      'id': 'T_Avalonia_Controls_Templates_ITypedDataTemplate',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'TemplateExtensions Class',
                      'id': 'T_Avalonia_Controls_Templates_TemplateExtensions',
                    }

                  ]
                },
                {
                  'type': 'category',
                  'label': 'Avalonia.Controls.Utils Namespace',
                  'collapsed': true,
                  'link': {type: 'doc', id: 'N_Avalonia_Controls_Utils'},
                  'items': [
                    {
                      'type': 'doc',
                      'label': 'AncestorFinder Class',
                      'id': 'T_Avalonia_Controls_Utils_AncestorFinder',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'ISelectionAdapter Interface',
                      'id': 'T_Avalonia_Controls_Utils_ISelectionAdapter',
                    }
,
                    {
                      'type': 'doc',
                      'label': 'SelectingItemsControlSelectionAdapter Class',
                      'id': 'T_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter',
                    }

                  ]
                }
              ]
            },
            {
              'type': 'category',
              'label': 'Avalonia.Platform Namespace',
              'collapsed': true,
              'link': {type: 'doc', id: 'N_Avalonia_Platform'},
              'items': [
                {
                  'type': 'doc',
                  'label': 'ExtendClientAreaChromeHints Enumeration',
                  'id': 'T_Avalonia_Platform_ExtendClientAreaChromeHints',
                }
,
                {
                  'type': 'doc',
                  'label': 'IApplicationPlatformEvents Interface',
                  'id': 'T_Avalonia_Platform_IApplicationPlatformEvents',
                }
,
                {
                  'type': 'doc',
                  'label': 'INativePlatformHandleSurface Interface',
                  'id': 'T_Avalonia_Platform_INativePlatformHandleSurface',
                }
,
                {
                  'type': 'doc',
                  'label': 'IPlatformIconLoader Interface',
                  'id': 'T_Avalonia_Platform_IPlatformIconLoader',
                }
,
                {
                  'type': 'doc',
                  'label': 'IPlatformLifetimeEventsImpl Interface',
                  'id': 'T_Avalonia_Platform_IPlatformLifetimeEventsImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'IPopupImpl Interface',
                  'id': 'T_Avalonia_Platform_IPopupImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'IScreenImpl Interface',
                  'id': 'T_Avalonia_Platform_IScreenImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'ITopLevelImpl Interface',
                  'id': 'T_Avalonia_Platform_ITopLevelImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'ITrayIconImpl Interface',
                  'id': 'T_Avalonia_Platform_ITrayIconImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'ITrayIconWithIsTemplateImpl Interface',
                  'id': 'T_Avalonia_Platform_ITrayIconWithIsTemplateImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'IWindowBaseImpl Interface',
                  'id': 'T_Avalonia_Platform_IWindowBaseImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'IWindowIconImpl Interface',
                  'id': 'T_Avalonia_Platform_IWindowIconImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'IWindowImpl Interface',
                  'id': 'T_Avalonia_Platform_IWindowImpl',
                }
,
                {
                  'type': 'doc',
                  'label': 'IWindowingPlatform Interface',
                  'id': 'T_Avalonia_Platform_IWindowingPlatform',
                }
,
                {
                  'type': 'doc',
                  'label': 'PlatformScreen Class',
                  'id': 'T_Avalonia_Platform_PlatformScreen',
                }
,
                {
                  'type': 'doc',
                  'label': 'Screen Class',
                  'id': 'T_Avalonia_Platform_Screen',
                }
,
                {
                  'type': 'doc',
                  'label': 'ScreenOrientation Enumeration',
                  'id': 'T_Avalonia_Platform_ScreenOrientation',
                }
,
                {
                  'type': 'doc',
                  'label': 'ScreensBase<TKey, TScreen> Class',
                  'id': 'T_Avalonia_Platform_ScreensBase_2',
                }

              ]
            }
          ]
        }
  ],
};

module.exports = sidebars;
