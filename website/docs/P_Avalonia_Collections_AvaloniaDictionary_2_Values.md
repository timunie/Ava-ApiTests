# Values Property


Gets an <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> containing the values in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ICollection<TValue> Values { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Values As ICollection(Of TValue)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Values : ICollection<'TValue> with get
override Values : ICollection<'TValue> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L57" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a>)  
An <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> containing the values in the object that implements <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.values" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).Values</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

