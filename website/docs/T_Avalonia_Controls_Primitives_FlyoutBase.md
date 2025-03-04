import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FlyoutBase Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class FlyoutBase : AvaloniaObject
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class FlyoutBase
	Inherits AvaloniaObject
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type FlyoutBase = 
    class
        inherit AvaloniaObject
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Flyouts/FlyoutBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  FlyoutBase</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">Avalonia.Controls.Primitives.PopupFlyoutBase</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase__ctor">FlyoutBase()</a></td>
<td>Initializes a new instance of the FlyoutBase class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_FlyoutBase_IsOpen">IsOpen</a></td>
<td>Gets whether this Flyout is currently Open</td>
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
<td><a href="P_Avalonia_Controls_Primitives_FlyoutBase_Target">Target</a></td>
<td>Gets the Target used for showing the Flyout</td>
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
<td>Equals(Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_GetAttachedFlyout">GetAttachedFlyout(Control)</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_Hide">Hide()</a></td>
<td> </td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_OnClosed">OnClosed()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_OnOpened">OnOpened()</a></td>
<td> </td>
</tr>
<tr>
<td>OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetAndRaise``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_SetAttachedFlyout">SetAttachedFlyout(Control, FlyoutBase)</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_ShowAt">ShowAt(Control)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_ShowAttachedFlyout">ShowAttachedFlyout(Control)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>VerifyAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_FlyoutBase_Closed">Closed</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_FlyoutBase_Opened">Opened</a></td>
<td> </td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_FlyoutBase_AttachedFlyoutProperty">AttachedFlyoutProperty</a></td>
<td>Defines the AttachedFlyout property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_FlyoutBase_IsOpenProperty">IsOpenProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_FlyoutBase_IsOpen">IsOpen</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_FlyoutBase_TargetProperty">TargetProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_FlyoutBase_Target">Target</a> property</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
