import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NumericUpDown Class


Control that represents a TextBox with button spinners that allow incrementing and decrementing numeric values.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class NumericUpDown : TemplatedControl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class NumericUpDown
	Inherits TemplatedControl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type NumericUpDown = 
    class
        inherit TemplatedControl
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  NumericUpDown</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown__ctor">NumericUpDown</a></td>
<td>Initializes new instance of NumericUpDown class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_AllowSpin">AllowSpin</a></td>
<td>Gets or sets the ability to perform increment/decrement operations via the keyboard, button spinners, or mouse wheel.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_ButtonSpinnerLocation">ButtonSpinnerLocation</a></td>
<td>Gets or sets current location of the <a href="T_Avalonia_Controls_ButtonSpinner">ButtonSpinner</a>.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_ClipValueToMinMax">ClipValueToMinMax</a></td>
<td>Gets or sets if the value should be clipped when minimum/maximum is reached.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_FormatString">FormatString</a></td>
<td>Gets or sets the display format of the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a>.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td>Gets or sets the horizontal alignment of the content within the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_Increment">Increment</a></td>
<td>Gets or sets the amount in which to increment the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a>.</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_InnerLeftContent">InnerLeftContent</a></td>
<td>Gets or sets custom content that is positioned on the left side of the text layout box</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_InnerRightContent">InnerRightContent</a></td>
<td>Gets or sets custom content that is positioned on the right side of the text layout box</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_IsReadOnly">IsReadOnly</a></td>
<td>Gets or sets if the control is read only.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_Maximum">Maximum</a></td>
<td>Gets or sets the maximum allowed value.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_Minimum">Minimum</a></td>
<td>Gets or sets the minimum allowed value.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_NumberFormat">NumberFormat</a></td>
<td>Gets or sets the current NumberFormatInfo</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_ParsingNumberStyle">ParsingNumberStyle</a></td>
<td>Gets or sets the parsing style (AllowLeadingWhite, Float, AllowHexSpecifier, ...). By default, Any. Note that Hex style does not work with decimal. For hexadecimal display, use <a href="P_Avalonia_Controls_NumericUpDown_TextConverter">TextConverter</a>.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_ShowButtonSpinner">ShowButtonSpinner</a></td>
<td>Gets or sets a value indicating whether the spin buttons should be shown.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_Text">Text</a></td>
<td>Gets or sets the formatted string representation of the value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_TextAlignment">TextAlignment</a></td>
<td>Gets or sets the TextAlignment of the NumericUpDown</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_TextConverter">TextConverter</a></td>
<td>Gets or sets the custom bidirectional Text-Value converter. Non-null converter overrides <a href="P_Avalonia_Controls_NumericUpDown_ParsingNumberStyle">ParsingNumberStyle</a>, providing finer control over string representation of the underlying value.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a></td>
<td>Gets or sets the value.</td>
</tr>
<tr>
<td>VerticalAlignment</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NumericUpDown_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td>Gets or sets the vertical alignment of the content within the control.</td>
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
<td><a href="P_Avalonia_Controls_NumericUpDown_Watermark">Watermark</a></td>
<td>Gets or sets the object to use as a watermark if the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a> is null.</td>
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
<td>BeginInit</td>
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
<td>BuildEventRoute</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess</td>
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
<td>CoerceValue</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>EndInit</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>GetHashCode</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td><a href="M_Avalonia_Controls_NumericUpDown_OnApplyTemplate">OnApplyTemplate</a></td>
<td>Called when the control's template is applied. In simple terms, this means the method is called just before the control is displayed.<br />(Overrides <a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnApplyTemplate">TemplatedControl.OnApplyTemplate(TemplateAppliedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnAttachedToVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnCoerceIncrement">OnCoerceIncrement</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Increment">Increment</a> property has to be coerced.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnCoerceMaximum">OnCoerceMaximum</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Maximum">Maximum</a> property has to be coerced.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnCoerceMinimum">OnCoerceMinimum</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Minimum">Minimum</a> property has to be coerced.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnCoerceValue">OnCoerceValue</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a> property has to be coerced.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">OnCreateAutomationPeer</a></td>
<td>Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnDataContextBeginUpdate</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextEndUpdate</td>
<td><br />(Inherited from StyledElement)</td>
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
<td><a href="M_Avalonia_Controls_NumericUpDown_OnFormatStringChanged">OnFormatStringChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_FormatString">FormatString</a> property value changed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnGotFocus">OnGotFocus</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnGotFocus">Control.OnGotFocus(GotFocusEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnIncrementChanged">OnIncrementChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Increment">Increment</a> property value changed.</td>
</tr>
<tr>
<td>OnInitialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnIsReadOnlyChanged">OnIsReadOnlyChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_IsReadOnly">IsReadOnly</a> property value changed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnKeyDown">OnKeyDown</a></td>
<td><br />(Overrides InputElement.OnKeyDown(KeyEventArgs))</td>
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
<td><a href="M_Avalonia_Controls_NumericUpDown_OnLostFocus">OnLostFocus</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnLostFocus">Control.OnLostFocus(RoutedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnMaximumChanged">OnMaximumChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Maximum">Maximum</a> property value changed.</td>
</tr>
<tr>
<td>OnMeasureInvalidated</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnMinimumChanged">OnMinimumChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Minimum">Minimum</a> property value changed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnNumberFormatChanged">OnNumberFormatChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_NumberFormat">NumberFormat</a> property value changed.</td>
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
<td><a href="M_Avalonia_Controls_Control_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td><a href="M_Avalonia_Controls_NumericUpDown_OnSpin">OnSpin</a></td>
<td>Raises the OnSpin event when spinning is initiated by the end-user.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a> property changes.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnTextChanged">OnTextChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Text">Text</a> property value changed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnTextConverterChanged">OnTextConverterChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Text">Text</a> property value changed.</td>
</tr>
<tr>
<td>OnTextInput</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NumericUpDown_OnValueChanged">OnValueChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a> property value changed.</td>
</tr>
<tr>
<td>OnVisualParentChanged</td>
<td><br />(Inherited from Layoutable)</td>
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
<td><a href="M_Avalonia_Controls_NumericUpDown_RaiseValueChangedEvent">RaiseValueChangedEvent</a></td>
<td>Raises the <a href="E_Avalonia_Controls_NumericUpDown_ValueChanged">ValueChanged</a> event.</td>
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
<td><a href="M_Avalonia_Controls_NumericUpDown_UpdateDataValidation">UpdateDataValidation</a></td>
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
<td><a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a></td>
<td>Occurs when the bounds (actual size) of the control have changed.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_NumericUpDown_Spinned">Spinned</a></td>
<td> </td>
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
<tr>
<td><a href="E_Avalonia_Controls_NumericUpDown_ValueChanged">ValueChanged</a></td>
<td>Raised when the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a> changes.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_AllowSpinProperty">AllowSpinProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_AllowSpin">AllowSpin</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_ButtonSpinnerLocationProperty">ButtonSpinnerLocationProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_ButtonSpinnerLocation">ButtonSpinnerLocation</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_ClipValueToMinMaxProperty">ClipValueToMinMaxProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_ClipValueToMinMax">ClipValueToMinMax</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_FormatStringProperty">FormatStringProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_FormatString">FormatString</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_HorizontalContentAlignmentProperty">HorizontalContentAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_HorizontalContentAlignment">HorizontalContentAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_IncrementProperty">IncrementProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_Increment">Increment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_InnerLeftContentProperty">InnerLeftContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_InnerLeftContent">InnerLeftContent</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_InnerRightContentProperty">InnerRightContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_InnerRightContent">InnerRightContent</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_IsReadOnlyProperty">IsReadOnlyProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_IsReadOnly">IsReadOnly</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_MaximumProperty">MaximumProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_Maximum">Maximum</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_MinimumProperty">MinimumProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_Minimum">Minimum</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_NumberFormatProperty">NumberFormatProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_NumberFormat">NumberFormat</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_ParsingNumberStyleProperty">ParsingNumberStyleProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_ParsingNumberStyle">ParsingNumberStyle</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_ShowButtonSpinnerProperty">ShowButtonSpinnerProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_ShowButtonSpinner">ShowButtonSpinner</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_TextAlignmentProperty">TextAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_TextAlignment">TextAlignment</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_TextConverterProperty">TextConverterProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_TextConverter">TextConverter</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_TextProperty">TextProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_Text">Text</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_ValueChangedEvent">ValueChangedEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_NumericUpDown_ValueChanged">ValueChanged</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_ValueProperty">ValueProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_VerticalContentAlignmentProperty">VerticalContentAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_VerticalContentAlignment">VerticalContentAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_NumericUpDown_WatermarkProperty">WatermarkProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_NumericUpDown_Watermark">Watermark</a> property.</td>
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
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
