import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NativeMenuItemSeparator Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class NativeMenuItemSeparator : NativeMenuItem
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class NativeMenuItemSeparator
	Inherits NativeMenuItem
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type NativeMenuItemSeparator = 
    class
        inherit NativeMenuItem
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  <a href="T_Avalonia_Controls_NativeMenuItemBase">NativeMenuItemBase</a>  →  <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>  →  NativeMenuItemSeparator</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_NativeMenuItemSeparator__ctor">NativeMenuItemSeparator</a></td>
<td>Initializes a new instance of the NativeMenuItemSeparator class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_Command">Command</a></td>
<td>Gets or sets the command associated with the menu item.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_CommandParameter">CommandParameter</a></td>
<td>Gets or sets the parameter to pass to the <a href="P_Avalonia_Controls_MenuItem_Command">Command</a> property of a <a href="T_Avalonia_Controls_MenuItem">MenuItem</a>.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_Gesture">Gesture</a></td>
<td>Gets or sets the input gesture that will be displayed in the menu item.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_HasClickHandlers">HasClickHandlers</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_Header">Header</a></td>
<td>Gets or sets the content of the control's header.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_Icon">Icon</a></td>
<td>Gets or sets the icon that appears in a <a href="T_Avalonia_Controls_MenuItem">MenuItem</a>.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_IsChecked">IsChecked</a></td>
<td>Gets or sets if menu item is checked when ToggleType is <a href="T_Avalonia_Controls_MenuItemToggleType">CheckBox</a> or <a href="T_Avalonia_Controls_MenuItemToggleType">Radio</a>.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_IsEnabled">IsEnabled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_IsVisible">IsVisible</a></td>
<td>Gets or sets a value indicating whether this menu item is visible.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
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
<td><a href="P_Avalonia_Controls_NativeMenuItem_Menu">Menu</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItemBase_Parent">Parent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItemBase">NativeMenuItemBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_ToggleType">ToggleType</a></td>
<td>Gets toggle type of the menu item.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_NativeMenuItem_ToolTip">ToolTip</a></td>
<td>Gets or sets the tooltip associated with the menu item. This may not be supported by the native menu provider, but will be passed on to the non-native fallback menu item if used.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
</table>

## Methods
<table>
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
<td>IsAnimating</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NativeMenuItem_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td><a href="E_Avalonia_Controls_NativeMenuItem_Click">Click</a></td>
<td>Occurs when a <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a> is clicked.<br />(Inherited from <a href="T_Avalonia_Controls_NativeMenuItem">NativeMenuItem</a>)</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
