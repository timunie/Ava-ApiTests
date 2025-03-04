import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TreeView Class


Displays a hierarchical tree of data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class TreeView : ItemsControl, ICustomKeyboardNavigation
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class TreeView
	Inherits ItemsControl
	Implements ICustomKeyboardNavigation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TreeView = 
    class
        inherit ItemsControl
        interface ICustomKeyboardNavigation
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TreeView.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>  →  TreeView</td></tr>
<tr><td><strong>Implements</strong></td><td>ICustomKeyboardNavigation</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_TreeView__ctor">TreeView()</a></td>
<td>Initializes a new instance of the TreeView class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TreeView_AutoScrollToSelectedItem">AutoScrollToSelectedItem</a></td>
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
<td><a href="P_Avalonia_Controls_TreeView_ItemContainerGenerator">ItemContainerGenerator</a></td>
<td>Gets the <a href="T_Avalonia_Controls_Generators_TreeItemContainerGenerator">TreeItemContainerGenerator</a> for the tree view.</td>
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
<td><a href="P_Avalonia_Controls_TreeView_SelectedItem">SelectedItem</a></td>
<td>Gets or sets the selected item.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TreeView_SelectedItems">SelectedItems</a></td>
<td>Gets or sets the selected items.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TreeView_SelectionMode">SelectionMode</a></td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_ClearContainerForItemOverride">ClearContainerForItemOverride(Control)</a></td>
<td>Undoes the effects of the <a href="M_Avalonia_Controls_ItemsControl_PrepareContainerForItemOverride">PrepareContainerForItemOverride(Control, Object, Int32)</a> method.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_CollapseSubTree">CollapseSubTree(TreeViewItem)</a></td>
<td>Collapse the specified <a href="T_Avalonia_Controls_TreeViewItem">TreeViewItem</a> all descendent <a href="T_Avalonia_Controls_TreeViewItem">TreeViewItem</a> s.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_ContainerForItemPreparedOverride">ContainerForItemPreparedOverride(Control, Object, Int32)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_ContainerForItemPreparedOverride">ItemsControl.ContainerForItemPreparedOverride(Control, Object, Int32)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ContainerFromIndex">ContainerFromIndex(Int32)</a></td>
<td>Returns the container for the item at the specified index.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ContainerFromItem">ContainerFromItem(Object)</a></td>
<td>Returns the container corresponding to the specified item.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_ContainerIndexChangedOverride">ContainerIndexChangedOverride(Control, Int32, Int32)</a></td>
<td>Called when the index for a container changes due to an insertion or removal in the items collection.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_CreateContainerForItemOverride">CreateContainerForItemOverride(Object, Int32, Object)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_CreateContainerForItemOverride">ItemsControl.CreateContainerForItemOverride(Object, Int32, Object)</a>)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_ExpandSubTree">ExpandSubTree(TreeViewItem)</a></td>
<td>Expands the specified <a href="T_Avalonia_Controls_TreeViewItem">TreeViewItem</a> all descendent <a href="T_Avalonia_Controls_TreeViewItem">TreeViewItem</a>s.</td>
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
<td>GetBaseValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_GetContainerFromEventSource">GetContainerFromEventSource(Object)</a></td>
<td>Tries to get the container that was the source of an event.</td>
</tr>
<tr>
<td>GetHashCode()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_GetRealizedContainers">GetRealizedContainers()</a></td>
<td>Gets the currently realized containers.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_GetRealizedTreeContainers">GetRealizedTreeContainers()</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_IndexFromContainer">IndexFromContainer(Control)</a></td>
<td>Returns the index to the item that has the specified, generated container.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_ItemFromContainer">ItemFromContainer(Control)</a></td>
<td>Returns the item that corresponds to the specified, generated container.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_NeedsContainer__1">NeedsContainer(T)(Object, Object)</a></td>
<td>A default implementation of <a href="M_Avalonia_Controls_ItemsControl_NeedsContainerOverride">NeedsContainerOverride(Object, Int32, Object)</a> that returns true and sets the recycle key to <a href="P_Avalonia_Controls_ItemsControl_DefaultRecycleKey">DefaultRecycleKey</a> if the item is not a <em>T</em> .<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_NeedsContainerOverride">NeedsContainerOverride(Object, Int32, Object)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_NeedsContainerOverride">ItemsControl.NeedsContainerOverride(Object, Int32, Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsControl_OnApplyTemplate">OnApplyTemplate(TemplateAppliedEventArgs)</a></td>
<td>Called when the control's template is applied. In simple terms, this means the method is called just before the control is displayed.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td>Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.<br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_OnCreateAutomationPeer">ItemsControl.OnCreateAutomationPeer()</a>)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_OnGotFocus">ItemsControl.OnGotFocus(GotFocusEventArgs)</a>)</td>
</tr>
<tr>
<td>OnInitialized()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_OnKeyDown">OnKeyDown(KeyEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ItemsControl_OnKeyDown">ItemsControl.OnKeyDown(KeyEventArgs)</a>)</td>
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
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_OnPointerPressed">OnPointerPressed(PointerPressedEventArgs)</a></td>
<td><br />(Overrides InputElement.OnPointerPressed(PointerPressedEventArgs))</td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from Animatable)</td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_PrepareContainerForItemOverride">PrepareContainerForItemOverride(Control, Object, Int32)</a></td>
<td>Prepares the specified element to display the specified item.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>)</td>
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
<td><a href="M_Avalonia_Controls_ItemsControl_RefreshContainers">RefreshContainers()</a></td>
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
<td>Render(DrawingContext)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_SelectAll">SelectAll()</a></td>
<td>Selects all items in the TreeView.</td>
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
<td><a href="M_Avalonia_Controls_TreeView_TreeContainerFromItem">TreeContainerFromItem(Object)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_TreeItemFromContainer">TreeItemFromContainer(Control)</a></td>
<td> </td>
</tr>
<tr>
<td>TryGetResource(Object, ThemeVariant, Object)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_UnselectAll">UnselectAll()</a></td>
<td>Deselects all items in the TreeView.</td>
</tr>
<tr>
<td>UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td><a href="M_Avalonia_Controls_TreeView_UpdateSelectionFromContainer">UpdateSelectionFromContainer(Control, Boolean, Boolean, Boolean, Boolean)</a></td>
<td>Updates the selection for an item based on user interaction.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TreeView_UpdateSelectionFromEventSource">UpdateSelectionFromEventSource(Object, Boolean, Boolean, Boolean, Boolean)</a></td>
<td>Updates the selection based on an event that may have originated in a container that belongs to the control.</td>
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
<td><a href="E_Avalonia_Controls_TreeView_SelectionChanged">SelectionChanged</a></td>
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
<td><a href="F_Avalonia_Controls_TreeView_AutoScrollToSelectedItemProperty">AutoScrollToSelectedItemProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TreeView_AutoScrollToSelectedItem">AutoScrollToSelectedItem</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TreeView_SelectedItemProperty">SelectedItemProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TreeView_SelectedItem">SelectedItem</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TreeView_SelectedItemsProperty">SelectedItemsProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TreeView_SelectedItems">SelectedItems</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TreeView_SelectionModeProperty">SelectionModeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TreeView_SelectionMode">SelectionMode</a> property.</td>
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
