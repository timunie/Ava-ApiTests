import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectingItemsControl Class


An <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> that maintains a selection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class SelectingItemsControl : ItemsControl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class SelectingItemsControl
	Inherits ItemsControl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SelectingItemsControl = 
    class
        inherit ItemsControl
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>  →  SelectingItemsControl</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Carousel">Avalonia.Controls.Carousel</a><br /><a href="T_Avalonia_Controls_ComboBox">Avalonia.Controls.ComboBox</a><br /><a href="T_Avalonia_Controls_ListBox">Avalonia.Controls.ListBox</a><br /><a href="T_Avalonia_Controls_MenuBase">Avalonia.Controls.MenuBase</a><br /><a href="T_Avalonia_Controls_Primitives_HeaderedSelectingItemsControl">Avalonia.Controls.Primitives.HeaderedSelectingItemsControl</a><br /><a href="T_Avalonia_Controls_Primitives_TabStrip">Avalonia.Controls.Primitives.TabStrip</a><br /><a href="T_Avalonia_Controls_TabControl">Avalonia.Controls.TabControl</a></td></tr>
</table>


SelectingItemsControl provides a base class for <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>s that maintain a selection (single or multiple). By default only its <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedIndex">SelectedIndex</a> and <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItem">SelectedItem</a> properties are visible; the current multiple <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_Selection">Selection</a> and <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItems">SelectedItems</a> together with the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionMode">SelectionMode</a> properties are protected, however a derived class can expose these if it wishes to support multiple selection.

SelectingItemsControl maintains a selection respecting the current <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionMode">SelectionMode</a> but it does not react to user input; this must be handled in a derived class. It does, however, respond to <a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsSelectedChangedEvent">IsSelectedChangedEvent</a> events from items and updates the selection accordingly.


## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl__ctor">SelectingItemsControl</a></td>
<td>Initializes a new instance of the SelectingItemsControl class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_AlwaysSelected">AlwaysSelected</a></td>
<td>Gets a value indicating whether <a href="T_Avalonia_Controls_SelectionMode">AlwaysSelected</a> is set.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_AutoScrollToSelectedItem">AutoScrollToSelectedItem</a></td>
<td>Gets or sets a value indicating whether to automatically scroll to newly selected items.</td>
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
<td><a href="P_Avalonia_Controls_ItemsControl_DisplayMemberBinding">DisplayMemberBinding</a></td>
<td>Gets or sets the IBinding to use for binding to the display member of each item.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td>Effect</td>
<td><br />(Inherited from Visual)</td>
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
<td>IsArrangeValid</td>
<td><br />(Inherited from Layoutable)</td>
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
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_IsTextSearchEnabled">IsTextSearchEnabled</a></td>
<td>Gets or sets a value that specifies whether a user can jump to a value by typing.</td>
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
<td><a href="P_Avalonia_Controls_ItemsControl_ItemContainerGenerator">ItemContainerGenerator</a></td>
<td>Gets the <a href="P_Avalonia_Controls_ItemsControl_ItemContainerGenerator">ItemContainerGenerator</a> for the control.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemContainerTheme">ItemContainerTheme</a></td>
<td>Gets or sets the ControlTheme that is applied to the container element generated for each item.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemCount">ItemCount</a></td>
<td>Gets the number of items being displayed by the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_Items">Items</a></td>
<td>Gets the items to display.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemsPanel">ItemsPanel</a></td>
<td>Gets or sets the panel used to display the items.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemsPanelRoot">ItemsPanelRoot</a></td>
<td>Gets the <a href="T_Avalonia_Controls_Panel">Panel</a> specified by <a href="P_Avalonia_Controls_ItemsControl_ItemsPanel">ItemsPanel</a>.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemsSource">ItemsSource</a></td>
<td>Gets or sets a collection used to generate the content of the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemsView">ItemsView</a></td>
<td>Gets a read-only view of the items in the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsControl_ItemTemplate">ItemTemplate</a></td>
<td>Gets or sets the data template used to display the items in the control.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td>MaxHeight</td>
<td><br />(Inherited from Layoutable)</td>
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
<td><a href="P_Avalonia_Controls_ItemsControl_Presenter">Presenter</a></td>
<td>Gets the items presenter control.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedIndex">SelectedIndex</a></td>
<td>Gets or sets the index of the selected item.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItem">SelectedItem</a></td>
<td>Gets or sets the selected item.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItems">SelectedItems</a></td>
<td>Gets or sets the selected items.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValue">SelectedValue</a></td>
<td>Gets or sets the value of the selected item, obtained using <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValueBinding">SelectedValueBinding</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValueBinding">SelectedValueBinding</a></td>
<td>Gets the IBinding instance used to obtain the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValue">SelectedValue</a> property</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_Selection">Selection</a></td>
<td>Gets or sets the model that holds the current selection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionMode">SelectionMode</a></td>
<td>Gets or sets the selection mode.</td>
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
<td>Width</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_WrapSelection">WrapSelection</a></td>
<td>Gets or sets a value which indicates whether to wrap around when the first or last item is reached.</td>
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
<td>ApplyStyling</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Arrange</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ArrangeCore</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ArrangeOverride</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_BeginInit">BeginInit</a></td>
<td>Signals the object that initialization is starting.<br />(Overrides StyledElement.BeginInit())</td>
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
<td>BuildEventRoute</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_ClearContainerForItemOverride">ClearContainerForItemOverride</a></td>
<td>Undoes the effects of the <a href="M_Avalonia_Controls_ItemsControl_PrepareContainerForItemOverride">PrepareContainerForItemOverride(Control, Object, Int32)</a> method.<br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_ClearContainerForItemOverride">ItemsControl.ClearContainerForItemOverride(Control)</a>)</td>
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
<td>CoerceValue</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_ContainerForItemPreparedOverride">ContainerForItemPreparedOverride</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_ContainerForItemPreparedOverride">ItemsControl.ContainerForItemPreparedOverride(Control, Object, Int32)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ContainerFromIndex">ContainerFromIndex</a></td>
<td>Returns the container for the item at the specified index.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ContainerFromItem">ContainerFromItem</a></td>
<td>Returns the container corresponding to the specified item.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_ContainerIndexChangedOverride">ContainerIndexChangedOverride</a></td>
<td>Called when the index for a container changes due to an insertion or removal in the items collection.<br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_ContainerIndexChangedOverride">ItemsControl.ContainerIndexChangedOverride(Control, Int32, Int32)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_CreateContainerForItemOverride">CreateContainerForItemOverride</a></td>
<td>Creates or a container that can be used to display an item.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_EndInit">EndInit</a></td>
<td>Signals the object that initialization is complete.<br />(Overrides StyledElement.EndInit())</td>
</tr>
<tr>
<td>Equals</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>Focus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>GetBaseValue``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_GetContainerFromEventSource">GetContainerFromEventSource</a></td>
<td>Tries to get the container that was the source of an event.</td>
</tr>
<tr>
<td>GetHashCode</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_GetIsSelected">GetIsSelected</a></td>
<td>Gets the value of the <a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsSelectedProperty">IsSelectedProperty</a> on the specified control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_GetRealizedContainers">GetRealizedContainers</a></td>
<td>Gets the currently realized containers.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_GetTemplateFocusTarget">GetTemplateFocusTarget</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_IndexFromContainer">IndexFromContainer</a></td>
<td>Returns the index to the item that has the specified, generated container.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td>InitializeIfNeeded</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>InvalidateArrange</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMeasure</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMirrorTransform</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>InvalidateVisual</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsAnimating</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ItemFromContainer">ItemFromContainer</a></td>
<td>Returns the item that corresponds to the specified, generated container.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td>LogicalChildrenCollectionChanged</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Measure</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MeasureCore</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MeasureOverride</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_MoveSelection_1">MoveSelection(NavigationDirection, Boolean, Boolean)</a></td>
<td>Moves the selection in the specified direction relative to the current selection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_MoveSelection">MoveSelection(Control, NavigationDirection, Boolean, Boolean)</a></td>
<td>Moves the selection in the specified direction relative to the specified container.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_NeedsContainer__1">NeedsContainer(T)</a></td>
<td>A default implementation of <a href="M_Avalonia_Controls_ItemsControl_NeedsContainerOverride">NeedsContainerOverride(Object, Int32, Object)</a> that returns true and sets the recycle key to <a href="P_Avalonia_Controls_ItemsControl_DefaultRecycleKey">DefaultRecycleKey</a> if the item is not a <em>T</em> .<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_NeedsContainerOverride">NeedsContainerOverride</a></td>
<td>Determines whether the specified item can be its own container.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnApplyTemplate">OnApplyTemplate</a></td>
<td>Called when the control's template is applied. In simple terms, this means the method is called just before the control is displayed.<br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_OnApplyTemplate">ItemsControl.OnApplyTemplate(TemplateAppliedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnAttachedToVisualTree">OnAttachedToVisualTree</a></td>
<td><br />(Overrides Visual.OnAttachedToVisualTree(VisualTreeAttachmentEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_OnCreateAutomationPeer">OnCreateAutomationPeer</a></td>
<td>Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnDataContextBeginUpdate">OnDataContextBeginUpdate</a></td>
<td><br />(Overrides StyledElement.OnDataContextBeginUpdate())</td>
</tr>
<tr>
<td>OnDataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnDataContextEndUpdate">OnDataContextEndUpdate</a></td>
<td><br />(Overrides StyledElement.OnDataContextEndUpdate())</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnDetachedFromVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_OnGotFocus">OnGotFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnInitialized">OnInitialized</a></td>
<td><br />(Overrides StyledElement.OnInitialized())</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_OnKeyDown">OnKeyDown</a></td>
<td>Handles directional navigation within the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnMeasureInvalidated</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>OnPointerCaptureLost</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerEntered</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerExited</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerMoved</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerPressed</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnPointerWheelChanged</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_OnPropertyChanged">ItemsControl.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a> property changes.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_OnTextInput">OnTextInput</a></td>
<td><br />(Overrides InputElement.OnTextInput(TextInputEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnVisualParentChanged</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_PrepareContainerForItemOverride">PrepareContainerForItemOverride</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_PrepareContainerForItemOverride">ItemsControl.PrepareContainerForItemOverride(Control, Object, Int32)</a>)</td>
</tr>
<tr>
<td>RaiseEvent</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_RefreshContainers">RefreshContainers</a></td>
<td>Refreshes the containers displayed by the control.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td>Render</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ScrollIntoView">ScrollIntoView(Int32)</a></td>
<td>Scrolls the specified item into view.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ScrollIntoView_1">ScrollIntoView(Object)</a></td>
<td>Scrolls the specified item into view.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td>SetAndRaise``1</td>
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
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_SetIsSelected">SetIsSelected</a></td>
<td>Gets the value of the <a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsSelectedProperty">IsSelectedProperty</a> on the specified control.</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>TryGetResource</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_UpdateDataValidation">UpdateDataValidation</a></td>
<td>Called to update the validation state for properties for which data validation is enabled.<br />(Overrides AvaloniaObject.UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception))</td>
</tr>
<tr>
<td>UpdateIsEffectivelyEnabled</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>UpdateLayout</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_UpdateSelection">UpdateSelection(Control, Boolean, Boolean, Boolean, Boolean, Boolean)</a></td>
<td>Updates the selection for a container based on user interaction.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_UpdateSelection_1">UpdateSelection(Int32, Boolean, Boolean, Boolean, Boolean, Boolean)</a></td>
<td>Updates the selection for an item based on user interaction.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectingItemsControl_UpdateSelectionFromEventSource">UpdateSelectionFromEventSource</a></td>
<td>Updates the selection based on an event that may have originated in a container that belongs to the control.</td>
</tr>
<tr>
<td>VerifyAccess</td>
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
<td><a href="E_Avalonia_Controls_ItemsControl_ContainerClearing">ContainerClearing</a></td>
<td>Occurs each time a container is cleared.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ItemsControl_ContainerIndexChanged">ContainerIndexChanged</a></td>
<td>Occurs for each realized container when the index for the item it represents has changed.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ItemsControl_ContainerPrepared">ContainerPrepared</a></td>
<td>Occurs each time a container is prepared for use.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ResourcesChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionChanged">SelectionChanged</a></td>
<td>Occurs when the control's selection changes.</td>
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
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_AutoScrollToSelectedItemProperty">AutoScrollToSelectedItemProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_AutoScrollToSelectedItem">AutoScrollToSelectedItem</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsSelectedChangedEvent">IsSelectedChangedEvent</a></td>
<td>Event that should be raised by containers when their selection state changes to notify the parent SelectingItemsControl that their selection state has changed.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsSelectedProperty">IsSelectedProperty</a></td>
<td>Defines the IsSelected attached property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsTextSearchEnabledProperty">IsTextSearchEnabledProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_IsTextSearchEnabled">IsTextSearchEnabled</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedIndexProperty">SelectedIndexProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedIndex">SelectedIndex</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItemProperty">SelectedItemProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItem">SelectedItem</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItemsProperty">SelectedItemsProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedItems">SelectedItems</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValueBindingProperty">SelectedValueBindingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValueBinding">SelectedValueBinding</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValueProperty">SelectedValueProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValue">SelectedValue</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionChangedEvent">SelectionChangedEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionChanged">SelectionChanged</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionModeProperty">SelectionModeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionMode">SelectionMode</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_SelectionProperty">SelectionProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_Selection">Selection</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_WrapSelectionProperty">WrapSelectionProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_WrapSelection">WrapSelection</a> property.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_FindControl__1">FindControl(T)</a></td>
<td>Finds the named control in the scope of the specified control.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_DataTemplateExtensions_FindDataTemplate">FindDataTemplate</a></td>
<td>Find a data template that matches a piece of data.<br />(Defined by <a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)</a></td>
<td>Finds the named control in the scope of the specified control and throws if not found.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_TemplateExtensions_GetTemplateChildren">GetTemplateChildren</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_TemplateExtensions">TemplateExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
