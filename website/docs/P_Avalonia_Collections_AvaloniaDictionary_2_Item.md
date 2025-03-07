# Item Property


Gets or sets the named resource.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TValue this[
	TKey key
] \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Default Property Item ( 
	key As TKey
) As TValue
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Item : 'TValue with get, set
override Item : 'TValue with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L81" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a></dt><dd>The resource key.</dd></dl>

#### Return Value
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a>  
The resource, or null if not found.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.item" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).Item(TKey)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.item" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary(TKey, TValue).Item(TKey)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
