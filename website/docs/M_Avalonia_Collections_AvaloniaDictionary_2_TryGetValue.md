# TryGetValue Method


Gets the value associated with the specified key.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetValue(
	TKey key,
	out TValue value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetValue ( 
	key As TKey,
	<OutAttribute> ByRef value As TValue
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetValue : 
        key : 'TKey * 
        value : 'TValue byref -> bool 
override TryGetValue : 
        key : 'TKey * 
        value : 'TValue byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L179" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a></dt><dd>The key whose value to get.</dd><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a></dt><dd>When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the <em>value</em> parameter. This parameter is passed uninitialized.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the object that implements <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a> contains an element with the specified key; otherwise, false.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).TryGetValue(TKey, TValue)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary(TKey, TValue).TryGetValue(TKey, TValue)</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td>
<td><em>key</em> is null.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

