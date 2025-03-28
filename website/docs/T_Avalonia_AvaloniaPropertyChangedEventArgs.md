# AvaloniaPropertyChangedEventArgs Class


Provides information for a avalonia property change.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class AvaloniaPropertyChangedEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class AvaloniaPropertyChangedEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type AvaloniaPropertyChangedEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyChangedEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  AvaloniaPropertyChangedEventArgs</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">Avalonia.AvaloniaPropertyChangedEventArgs(T)</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedEventArgs__ctor">AvaloniaPropertyChangedEventArgs(AvaloniaObject, BindingPriority)</a></td>
<td>Initializes a new instance of the AvaloniaPropertyChangedEventArgs class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_NewValue">NewValue</a></td>
<td>Gets the new value of the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_OldValue">OldValue</a></td>
<td>Gets the old value of the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_Priority">Priority</a></td>
<td>Gets the priority of the binding that produced the value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_Property">Property</a></td>
<td>Gets the property that changed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_Sender">Sender</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> that the property changed on.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedEventArgs_GetNewValue">GetNewValue()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedEventArgs_GetOldValue">GetOldValue()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedEventArgs_GetProperty">GetProperty()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedExtensions_GetNewValue__1">GetNewValue(T)()</a></td>
<td>Gets a typed value from <a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_NewValue">NewValue</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaPropertyChangedExtensions">AvaloniaPropertyChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedExtensions_GetOldAndNewValue__1">GetOldAndNewValue(T)()</a></td>
<td>Gets a typed value from <a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_OldValue">OldValue</a> and <a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_NewValue">NewValue</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaPropertyChangedExtensions">AvaloniaPropertyChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyChangedExtensions_GetOldValue__1">GetOldValue(T)()</a></td>
<td>Gets a typed value from <a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_OldValue">OldValue</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaPropertyChangedExtensions">AvaloniaPropertyChangedExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

