import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# InlineUIContainer Class


InlineUIContainer - a wrapper for embedded UIElements in text flow content inline collections



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class InlineUIContainer : Inline
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class InlineUIContainer
	Inherits Inline
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type InlineUIContainer = 
    class
        inherit Inline
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  <a href="T_Avalonia_Controls_Documents_TextElement">TextElement</a>  →  <a href="T_Avalonia_Controls_Documents_Inline">Inline</a>  →  InlineUIContainer</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineUIContainer__ctor">InlineUIContainer()</a></td>
<td>Initializes a new instance of InlineUIContainer element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineUIContainer__ctor_1">InlineUIContainer(Control)</a></td>
<td>Initializes an InlineBox specifying its child UIElement</td>
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
<td><a href="P_Avalonia_Controls_Documents_InlineUIContainer_Child">Child</a></td>
<td>The content spanned by this TextElement.</td>
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
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td>LogicalChildren</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>PseudoClasses</td>
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
<td>StyleKeyOverride</td>
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
<td>ApplyStyling</td>
<td><br />(Inherited from StyledElement)</td>
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
<td><a href="M_Avalonia_Controls_Documents_Inline_CreateTextRunProperties">CreateTextRunProperties</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Documents_Inline">Inline</a>)</td>
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
<td>GetBaseValue``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td>IsAnimating</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>LogicalChildrenCollectionChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>OnAttachedToLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>OnDetachedFromLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnInitialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineUIContainer_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Documents_Inline_OnPropertyChanged">Inline.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td>UpdateDataValidation</td>
<td><br />(Inherited from AvaloniaObject)</td>
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

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_Documents_InlineUIContainer_ChildProperty">ChildProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Documents_InlineUIContainer_Child">Child</a> property.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents Namespace</a>  
