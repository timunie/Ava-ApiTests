# ContainsKey Method


Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a> contains an element with the specified key.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ContainsKey(
	TKey key
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ContainsKey ( 
	key As TKey
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ContainsKey : 
        key : 'TKey -> bool 
override ContainsKey : 
        key : 'TKey -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L141" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a></dt><dd>The key to locate in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a> contains an element with the key; otherwise, false.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.containskey" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).ContainsKey(TKey)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.containskey" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary(TKey, TValue).ContainsKey(TKey)</a>  


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

