# ChildIndexChangedEventArgs Class


Event args for <a href="E_Avalonia_LogicalTree_IChildIndexProvider_ChildIndexChanged">ChildIndexChanged</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ChildIndexChangedEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ChildIndexChangedEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ChildIndexChangedEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/ChildIndexChangedEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  ChildIndexChangedEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_LogicalTree_ChildIndexChangedEventArgs__ctor">ChildIndexChangedEventArgs(ILogical, Int32)</a></td>
<td>Initializes a new instance of the ChildIndexChangedEventArgs class with an action of <a href="T_Avalonia_LogicalTree_ChildIndexChangedAction">ChildIndexChanged</a>.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_LogicalTree_ChildIndexChangedEventArgs_Action">Action</a></td>
<td>Gets the type of change action that ocurred on the list control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LogicalTree_ChildIndexChangedEventArgs_Child">Child</a></td>
<td>Gets the logical child whose index was changed or null if all children should be re-evaluated.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LogicalTree_ChildIndexChangedEventArgs_ChildIndexesReset">ChildIndexesReset</a></td>
<td>Gets an instance of the ChildIndexChangedEventArgs with an action of <a href="T_Avalonia_LogicalTree_ChildIndexChangedAction">ChildIndexesReset</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LogicalTree_ChildIndexChangedEventArgs_Index">Index</a></td>
<td>Gets the new index of <a href="P_Avalonia_LogicalTree_ChildIndexChangedEventArgs_Child">Child</a> or -1 if all children should be re-evaluated.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LogicalTree_ChildIndexChangedEventArgs_TotalCountChanged">TotalCountChanged</a></td>
<td>Gets an instance of the ChildIndexChangedEventArgs with an action of <a href="T_Avalonia_LogicalTree_ChildIndexChangedAction">TotalCountChanged</a>.</td>
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

## See Also


#### Reference
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  

