# IsReadOnly Property


Gets a value indicating whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is read-only.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsReadOnly { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property IsReadOnly As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IsReadOnly : bool with get
override IsReadOnly : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L51" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is read-only; otherwise, false.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.isreadonly" target="_blank" rel="noopener noreferrer">ICollection(T).IsReadOnly</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary.isreadonly" target="_blank" rel="noopener noreferrer">IDictionary.IsReadOnly</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

