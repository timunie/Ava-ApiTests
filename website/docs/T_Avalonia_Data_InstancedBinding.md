# InstancedBinding Class


Holds the result of calling <a href="M_Avalonia_Data_IBinding_Initiate">Initiate(AvaloniaObject, AvaloniaProperty, Object, Boolean)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class InstancedBinding
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class InstancedBinding
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type InstancedBinding = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/InstancedBinding.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  InstancedBinding</td></tr>
</table>

Whereas an <a href="T_Avalonia_Data_IBinding">IBinding</a> holds a description of a binding such as "Bind to the X property on a control's DataContext"; this class represents a binding that has been *instanced* by calling <a href="M_Avalonia_Data_IBinding_Initiate">Initiate(AvaloniaObject, AvaloniaProperty, Object, Boolean)</a> on a target object.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_InstancedBinding_Mode">Mode</a></td>
<td>Gets the binding mode with which the binding was initiated.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_InstancedBinding_Priority">Priority</a></td>
<td>Gets the binding priority.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_InstancedBinding_Source">Source</a></td>
<td>Gets the binding source observable.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_InstancedBinding_OneTime">OneTime(IObservable(Object), BindingPriority)</a></td>
<td>Creates a new one-time binding.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_InstancedBinding_OneTime_1">OneTime(Object, BindingPriority)</a></td>
<td>Creates a new one-time binding with a fixed value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_InstancedBinding_OneWay">OneWay(IObservable(Object), BindingPriority)</a></td>
<td>Creates a new one-way binding.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_InstancedBinding_OneWayToSource">OneWayToSource(IObserver(Object), BindingPriority)</a></td>
<td>Creates a new one-way to source binding.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_InstancedBinding_TwoWay">TwoWay(IObservable(Object), IObserver(Object), BindingPriority)</a></td>
<td>Creates a new two-way binding.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_InstancedBinding_WithPriority">WithPriority(BindingPriority)</a></td>
<td>Creates a copy of the InstancedBinding with a different priority.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
