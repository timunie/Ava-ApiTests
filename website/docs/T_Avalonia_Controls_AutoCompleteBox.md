import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AutoCompleteBox Class


Represents a control that provides a text box for user input and a drop-down that contains possible matches based on the input in the text box.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AutoCompleteBox : TemplatedControl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AutoCompleteBox
	Inherits TemplatedControl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AutoCompleteBox = 
    class
        inherit TemplatedControl
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  AutoCompleteBox</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox__ctor">AutoCompleteBox()</a></td>
<td>Initializes a new instance of the AutoCompleteBox class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_AsyncPopulator">AsyncPopulator</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Background">Background</a></td>
<td>Gets or sets the brush used to draw the control's background.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BackgroundSizing">BackgroundSizing</a></td>
<td>Gets or sets how the control's background is drawn relative to the control's border.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BorderBrush">BorderBrush</a></td>
<td>Gets or sets the brush used to draw the control's border.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BorderThickness">BorderThickness</a></td>
<td>Gets or sets the thickness of the control's border.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Bounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>BypassFlowDirectionPolicies</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_CaretIndex">CaretIndex</a></td>
<td>Gets or sets the caret index</td>
</tr>
<tr>
<td>Classes</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Clip</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>ClipToBounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextFlyout">ContextFlyout</a></td>
<td>Gets or sets a context flyout to the control<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextMenu">ContextMenu</a></td>
<td>Gets or sets a context menu to the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_CornerRadius">CornerRadius</a></td>
<td>Gets or sets the radius of the border rounded corners.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Cursor</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>DataContext</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_DataTemplates">DataTemplates</a></td>
<td>Gets or sets the data templates for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>DesiredSize</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>Effect</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_FilterMode">FilterMode</a></td>
<td>Gets or sets how the text in the text box is used to filter items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property for display in the drop-down.</td>
</tr>
<tr>
<td>FlowDirection</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Focusable</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_FocusAdorner">FocusAdorner</a></td>
<td>Gets or sets the control's focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontFamily">FontFamily</a></td>
<td>Gets or sets the font family used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontFeatures">FontFeatures</a></td>
<td>Gets or sets the font features turned on/off.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontSize">FontSize</a></td>
<td>Gets or sets the size of the control's text in points.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontStretch">FontStretch</a></td>
<td>Gets or sets the font stretch used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontStyle">FontStyle</a></td>
<td>Gets or sets the font style used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontWeight">FontWeight</a></td>
<td>Gets or sets the font weight used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Foreground">Foreground</a></td>
<td>Gets or sets the brush used to draw the control's text and other foreground elements.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>GestureRecognizers</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>HasMirrorTransform</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Height</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>HorizontalAlignment</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_InnerLeftContent">InnerLeftContent</a></td>
<td>Gets or sets custom content that is positioned on the left side of the text layout box</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_InnerRightContent">InnerRightContent</a></td>
<td>Gets or sets custom content that is positioned on the right side of the text layout box</td>
</tr>
<tr>
<td>IsArrangeValid</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a></td>
<td>Gets or sets a value indicating whether the drop-down portion of the control is open.</td>
</tr>
<tr>
<td>IsEffectivelyEnabled</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsEffectivelyVisible</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsEnabled</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsEnabledCore</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsFocused</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsHitTestVisible</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsInitialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>IsKeyboardFocusWithin</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_IsLoaded">IsLoaded</a></td>
<td>Gets a value indicating whether the control is fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>IsMeasureValid</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>IsPointerOver</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsTabStop</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_IsTextCompletionEnabled">IsTextCompletionEnabled</a></td>
<td>Gets or sets a value indicating whether the first possible match found during the filtering process will be displayed automatically in the text box.</td>
</tr>
<tr>
<td>IsVisible</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_ItemFilter">ItemFilter</a></td>
<td>Gets or sets the custom method that uses user-entered text to filter the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property for display in the drop-down.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_ItemSelector">ItemSelector</a></td>
<td>Gets or sets the custom method that combines the user-entered text and one of the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a></td>
<td>Gets or sets a collection that is used to generate the items for the drop-down portion of the AutoCompleteBox control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_ItemTemplate">ItemTemplate</a></td>
<td>Gets or sets the DataTemplate used to display each item in the drop-down portion of the control.</td>
</tr>
<tr>
<td>KeyBindings</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>LogicalChildren</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Margin</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_MaxDropDownHeight">MaxDropDownHeight</a></td>
<td>Gets or sets the maximum height of the drop-down portion of the AutoCompleteBox control.</td>
</tr>
<tr>
<td>MaxHeight</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_MaxLength">MaxLength</a></td>
<td>Gets or sets the maximum number of characters that the AutoCompleteBox can accept. This constraint only applies for manually entered (user-inputted) text.</td>
</tr>
<tr>
<td>MaxWidth</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MinHeight</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_MinimumPopulateDelay">MinimumPopulateDelay</a></td>
<td>Gets or sets the minimum delay, after text is typed in the text box before the AutoCompleteBox control populates the list of possible matches in the drop-down.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_MinimumPrefixLength">MinimumPrefixLength</a></td>
<td>Gets or sets the minimum number of characters required to be entered in the text box before the AutoCompleteBox displays possible matches.</td>
</tr>
<tr>
<td>MinWidth</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>Name</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Opacity</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>OpacityMask</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Padding">Padding</a></td>
<td>Gets or sets the padding placed between the border of the control and its content.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Parent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>PseudoClasses</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>RenderTransform</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>RenderTransformOrigin</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Resources</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_SearchText">SearchText</a></td>
<td>Gets the text that is used to filter items in the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> item collection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_SelectedItem">SelectedItem</a></td>
<td>Gets or sets the selected item in the drop-down.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_SelectionAdapter">SelectionAdapter</a></td>
<td>Gets or sets the selection adapter used to populate the drop-down with a list of selectable items.</td>
</tr>
<tr>
<td>StyleKey</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>StyleKeyOverride</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Styles</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>TabIndex</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_Tag">Tag</a></td>
<td>Gets or sets a user-defined object attached to the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a></td>
<td>Gets or sets the template that defines the control's appearance.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>TemplatedParent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a></td>
<td>Gets or sets the text in the text box portion of the AutoCompleteBox control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_TextFilter">TextFilter</a></td>
<td>Gets or sets the custom method that uses the user-entered text to filter items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property in a text-based way for display in the drop-down.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_TextSelector">TextSelector</a></td>
<td>Gets or sets the custom method that combines the user-entered text and one of the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> in a text-based way.</td>
</tr>
<tr>
<td>Theme</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Transitions</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td>UseLayoutRounding</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_ValueMemberBinding">ValueMemberBinding</a></td>
<td>Gets or sets the Binding that is used to get the values for display in the text portion of the AutoCompleteBox control.</td>
</tr>
<tr>
<td>VerticalAlignment</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>VisualChildren</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>VisualRoot</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_AutoCompleteBox_Watermark">Watermark</a></td>
<td> </td>
</tr>
<tr>
<td>Width</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ZIndex</td>
<td><br />(Inherited from Visual)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td>AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>AddHandler``1(RoutedEvent(UMP), EventHandler(UMP), RoutingStrategies, Boolean)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>ApplyStyling()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Arrange(Rect)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ArrangeCore(Rect)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ArrangeOverride(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>BeginInit()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IBinding)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(BindingValue(UMP)))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(Object))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(UMP), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(BindingValue(UMP)), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>BuildEventRoute(RoutedEvent)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(AvaloniaProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>CoerceValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>EndInit()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Equals(Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>Focus(NavigationMethod, KeyModifiers)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_FormatValue">FormatValue(Object)</a></td>
<td>Converts the specified object to a string by using the Converter and ConverterCulture values of the binding object specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ValueMemberBinding">ValueMemberBinding</a> property.</td>
</tr>
<tr>
<td>GetBaseValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_GetSelectionAdapterPart">GetSelectionAdapterPart(INameScope)</a></td>
<td>Returns the ISelectionAdapter part, if possible.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_GetTemplateFocusTarget">GetTemplateFocusTarget()</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_HasFocus">HasFocus()</a></td>
<td>Determines whether the text box or drop-down portion of the AutoCompleteBox control has focus.</td>
</tr>
<tr>
<td>InitializeIfNeeded()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>InvalidateArrange()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMeasure()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMirrorTransform()</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>InvalidateVisual()</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsAnimating(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>LogicalChildrenCollectionChanged(Object, NotifyCollectionChangedEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Measure(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MeasureCore(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MeasureOverride(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnApplyTemplate">OnApplyTemplate(TemplateAppliedEventArgs)</a></td>
<td>Builds the visual tree for the AutoCompleteBox control when a new template is applied.<br />(Overrides <a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnApplyTemplate">TemplatedControl.OnApplyTemplate(TemplateAppliedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td>Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnDataContextBeginUpdate()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextChanged(EventArgs)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextEndUpdate()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnDropDownClosed">OnDropDownClosed(EventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosed">DropDownClosed</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnDropDownClosing">OnDropDownClosing(CancelEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosing">DropDownClosing</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnDropDownOpened">OnDropDownOpened(EventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_DropDownOpened">DropDownOpened</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnDropDownOpening">OnDropDownOpening(CancelEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_DropDownOpening">DropDownOpening</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td>Provides handling for the GotFocus event.<br />(Overrides <a href="M_Avalonia_Controls_Control_OnGotFocus">Control.OnGotFocus(GotFocusEventArgs)</a>)</td>
</tr>
<tr>
<td>OnInitialized()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnKeyDown">OnKeyDown(KeyEventArgs)</a></td>
<td>Provides handling for the KeyDown event.<br />(Overrides InputElement.OnKeyDown(KeyEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp(KeyEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td>Provides handling for the LostFocus event.<br />(Overrides <a href="M_Avalonia_Controls_Control_OnLostFocus">Control.OnLostFocus(RoutedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnMeasureInvalidated()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>OnPointerCaptureLost(PointerCaptureLostEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerEntered(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerExited(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerMoved(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerPressed(PointerPressedEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased(PointerReleasedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnPointerWheelChanged(PointerWheelEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnPopulated">OnPopulated(PopulatedEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_Populated">Populated</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnPopulating">OnPopulating(PopulatingEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_Populating">Populating</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnSelectionChanged">OnSelectionChanged(SelectionChangedEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_SelectionChanged">SelectionChanged</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged(SizeChangedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a> property changes.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_OnTextChanged">OnTextChanged(TextChangedEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_TextChanged">TextChanged</a> event.</td>
</tr>
<tr>
<td>OnTextInput(TextInputEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnVisualParentChanged(Visual, Visual)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_PopulateComplete">PopulateComplete()</a></td>
<td>Notifies the AutoCompleteBox that the Items property has been set and the data can be filtered to provide possible matches in the drop-down.</td>
</tr>
<tr>
<td>RaiseEvent(RoutedEventArgs)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>RemoveHandler(RoutedEvent, Delegate)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RemoveHandler``1(RoutedEvent(UMP), EventHandler(UMP))</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>Render(DrawingContext)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>SetAndRaise``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue(AvaloniaProperty, Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue``1(StyledProperty(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue(AvaloniaProperty, Object, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(DirectPropertyBase(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(StyledProperty(UMP), UMP, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>TryGetResource(Object, ThemeVariant, Object)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_AutoCompleteBox_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td>Called to update the validation state for properties for which data validation is enabled.<br />(Overrides AvaloniaObject.UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception))</td>
</tr>
<tr>
<td>UpdateIsEffectivelyEnabled()</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>UpdateLayout()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>VerifyAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Events
<table>
<tr>
<td>ActualThemeVariantChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>AttachedToLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>AttachedToVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>DataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DetachedFromLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DetachedFromVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>DoubleTapped</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosed">DropDownClosed</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property was changed from true to false and the drop-down is open.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosing">DropDownClosing</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property is changing from true to false.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownOpened">DropDownOpened</a></td>
<td>Occurs when the value of the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property has changed from false to true and the drop-down is open.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownOpening">DropDownOpening</a></td>
<td>Occurs when the value of the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property is changing from false to true.</td>
</tr>
<tr>
<td>EffectiveViewportChanged</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>GotFocus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>Holding</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>Initialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>KeyDown</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>KeyUp</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>LayoutUpdated</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Loaded">Loaded</a></td>
<td>Occurs when the control has been fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>LostFocus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerCaptureLost</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerEntered</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerExited</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerMoved</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerPressed</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerReleased</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerWheelChanged</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_Populated">Populated</a></td>
<td>Occurs when the AutoCompleteBox has populated the drop-down with possible matches based on the <a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a> property.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_Populating">Populating</a></td>
<td>Occurs when the AutoCompleteBox is populating the drop-down with possible matches based on the <a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a> property.</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ResourcesChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_SelectionChanged">SelectionChanged</a></td>
<td>Occurs when the selected item in the drop-down portion of the AutoCompleteBox has changed.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a></td>
<td>Occurs when the bounds (actual size) of the control have changed.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>Tapped</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_TextChanged">TextChanged</a></td>
<td>Occurs asynchronously when the text in the TextBox portion of the AutoCompleteBox changes.</td>
</tr>
<tr>
<td>TextInput</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>TextInputMethodClientRequested</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a></td>
<td>Occurs when the control is removed from the visual tree.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_AsyncPopulatorProperty">AsyncPopulatorProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_AsyncPopulator">AsyncPopulator</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_CaretIndexProperty">CaretIndexProperty</a></td>
<td>Defines see <a href="P_Avalonia_Controls_TextBox_CaretIndex">CaretIndex</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_FilterModeProperty">FilterModeProperty</a></td>
<td>Gets the identifier for the <a href="P_Avalonia_Controls_AutoCompleteBox_FilterMode">FilterMode</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_InnerLeftContentProperty">InnerLeftContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_AutoCompleteBox_InnerLeftContent">InnerLeftContent</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_InnerRightContentProperty">InnerRightContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_AutoCompleteBox_InnerRightContent">InnerRightContent</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_IsDropDownOpenProperty">IsDropDownOpenProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_IsTextCompletionEnabledProperty">IsTextCompletionEnabledProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_IsTextCompletionEnabled">IsTextCompletionEnabled</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_ItemFilterProperty">ItemFilterProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemFilter">ItemFilter</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_ItemSelectorProperty">ItemSelectorProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemSelector">ItemSelector</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_ItemsSourceProperty">ItemsSourceProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_ItemTemplateProperty">ItemTemplateProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemTemplate">ItemTemplate</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_MaxDropDownHeightProperty">MaxDropDownHeightProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_MaxDropDownHeight">MaxDropDownHeight</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_MaxLengthProperty">MaxLengthProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_AutoCompleteBox_MaxLength">MaxLength</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_MinimumPopulateDelayProperty">MinimumPopulateDelayProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_MinimumPopulateDelay">MinimumPopulateDelay</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_MinimumPrefixLengthProperty">MinimumPrefixLengthProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_MinimumPrefixLength">MinimumPrefixLength</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_SearchTextProperty">SearchTextProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_SearchText">SearchText</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_SelectedItemProperty">SelectedItemProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_SelectedItem">SelectedItem</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_SelectionChangedEvent">SelectionChangedEvent</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_TextChangedEvent">TextChangedEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_AutoCompleteBox_TextChanged">TextChanged</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_TextFilterProperty">TextFilterProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_TextFilter">TextFilter</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_TextProperty">TextProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_TextSelectorProperty">TextSelectorProperty</a></td>
<td>Identifies the <a href="P_Avalonia_Controls_AutoCompleteBox_TextSelector">TextSelector</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_AutoCompleteBox_WatermarkProperty">WatermarkProperty</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView()</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView(Rect)</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_FindControl__1">FindControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_DataTemplateExtensions_FindDataTemplate">FindDataTemplate(Object, IDataTemplate)</a></td>
<td>Find a data template that matches a piece of data.<br />(Defined by <a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control and throws if not found.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_TemplateExtensions_GetTemplateChildren">GetTemplateChildren()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_TemplateExtensions">TemplateExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
