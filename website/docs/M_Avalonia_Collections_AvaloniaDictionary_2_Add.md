# Add Method


Adds an element with the provided key and value to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Add(
	TKey key,
	TValue value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Add ( 
	key As TKey,
	value As TValue
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Add : 
        key : 'TKey * 
        value : 'TValue -> unit 
override Add : 
        key : 'TKey * 
        value : 'TValue -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L114" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a></dt><dd>The object to use as the key of the element to add.</dd><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a></dt><dd>The object to use as the value of the element to add.</dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.add#system-collections-generic-idictionary-2-add(-0-1)" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).Add(TKey, TValue)</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td>
<td><em>key</em> is null.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>An element with the same key already exists in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>The <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a> is read-only.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
