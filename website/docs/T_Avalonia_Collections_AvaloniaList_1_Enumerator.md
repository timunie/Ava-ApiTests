# AvaloniaList&lt;T&gt;.Enumerator Structure


Enumerates the elements of a <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct Enumerator : IEnumerator<T>, 
	IEnumerator, IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Enumerator
	Implements IEnumerator(Of T), IEnumerator, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Enumerator = 
    struct
        inherit ValueType
        interface IEnumerator<'T>
        interface IEnumerator
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  AvaloniaList(T).Enumerator</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1" target="_blank" rel="noopener noreferrer">IEnumerator</a>(<a href="T_Avalonia_Collections_AvaloniaList_1">T</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerator" target="_blank" rel="noopener noreferrer">IEnumerator</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Enumerator__ctor">AvaloniaList(T).Enumerator(List(T))</a></td>
<td>Initializes a new instance of the AvaloniaList(T).Enumerator class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Enumerator_Current">Current</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Enumerator_Dispose">Dispose()</a></td>
<td>Releases all resources used by the AvaloniaList(T).Enumerator</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Enumerator_MoveNext">MoveNext()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
