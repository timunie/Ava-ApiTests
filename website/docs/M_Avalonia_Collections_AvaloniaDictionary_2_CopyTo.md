# CopyTo Method


Copies the elements of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> to an <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a>, starting at a particular <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> index.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void CopyTo(
	KeyValuePair<TKey, TValue>[] array,
	int arrayIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub CopyTo ( 
	array As KeyValuePair(Of TKey, TValue)(),
	arrayIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CopyTo : 
        array : KeyValuePair<'TKey, 'TValue>[] * 
        arrayIndex : int -> unit 
override CopyTo : 
        array : KeyValuePair<'TKey, 'TValue>[] * 
        arrayIndex : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L145" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(<a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a>, <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a>)[]</dt><dd>The one-dimensional <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> that is the destination of the elements copied from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>. The <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> must have zero-based indexing.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The zero-based index in <em>array</em> at which copying begins.</dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.copyto" target="_blank" rel="noopener noreferrer">ICollection(T).CopyTo(T[], Int32)</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td>
<td><em>array</em> is null.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td><em>arrayIndex</em> is less than 0.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>The number of elements in the source <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is greater than the available space from <em>arrayIndex</em> to the end of the destination <em>array</em>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
