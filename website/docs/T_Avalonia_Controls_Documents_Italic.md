import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Italic Class


Italic element - markup helper for indicating italicized content. Equivalent to a Span with FontStyle property set to FontStyles.Italic. Can contain other inline elements.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class Italic : Span
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class Italic
	Inherits Span
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Italic = 
    class
        inherit Span
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Documents/Italic.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>  →  <a href="T_Avalonia_Controls_Documents_Inline">Inline</a>  →  <a href="T_Avalonia_Controls_Documents_Span">Span</a>  →  Italic</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Documents_Italic__ctor">Italic()</a></td>
<td>Initializes a new instance of the Italic class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_Background">Background</a></td>
<td>Gets or sets a brush used to paint the control's background.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_Inline_BaselineAlignment">BaselineAlignment</a></td>
<td>Describes how the baseline for a text-based element is positioned on the vertical axis, relative to the established baseline for text.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_Inline">Inline</a>)</td>
</tr>
<tr>
<td>Classes</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DataContext</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_FontFamily">FontFamily</a></td>
<td>Gets or sets the font family.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_FontFeatures">FontFeatures</a></td>
<td>Gets or sets the font features.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_FontSize">FontSize</a></td>
<td>Gets or sets the font size.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_FontStretch">FontStretch</a></td>
<td>Gets or sets the font stretch.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_FontStyle">FontStyle</a></td>
<td>Gets or sets the font style.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_FontWeight">FontWeight</a></td>
<td>Gets or sets the font weight.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_TextElement_Foreground">Foreground</a></td>
<td>Gets or sets a brush used to paint the text.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_Span_Inlines">Inlines</a></td>
<td>Gets or sets the inlines.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_Span">Span</a>)</td>
</tr>
<tr>
<td>IsInitialized</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>Name</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Parent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Resources</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>StyleKey</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Styles</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>TemplatedParent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_Inline_TextDecorations">TextDecorations</a></td>
<td>The TextDecorations property specifies decorations that are added to the text of an element.<br />(Inherited from <a href="T_Avalonia_Controls_Documents_Inline">Inline</a>)</td>
</tr>
<tr>
<td>Theme</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Transitions</td>
<td><br />(Inherited from Animatable)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td>ApplyStyling()</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>GetBaseValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode()</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td>IsAnimating(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet(AvaloniaProperty)</td>
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
<td>DataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DetachedFromLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Initialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ResourcesChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents Namespace</a>  
