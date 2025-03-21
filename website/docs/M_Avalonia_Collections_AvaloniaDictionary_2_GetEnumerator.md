# GetEnumerator Method


Returns an enumerator that iterates through the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetEnumerator As IEnumerator(Of KeyValuePair(Of TKey, TValue))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetEnumerator : unit -> IEnumerator<KeyValuePair<'TKey, 'TValue>> 
override GetEnumerator : unit -> IEnumerator<KeyValuePair<'TKey, 'TValue>> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs#L150" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1" target="_blank" rel="noopener noreferrer">IEnumerator</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(<a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a>, <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a>))  
An enumerator that can be used to iterate through the collection.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1.getenumerator" target="_blank" rel="noopener noreferrer">IEnumerable(T).GetEnumerator()</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

