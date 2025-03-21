# CopyTo Method


Copies the collection's contents to an array.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void CopyTo(
	T[] array,
	int arrayIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub CopyTo ( 
	array As T(),
	arrayIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CopyTo : 
        array : 'T[] * 
        arrayIndex : int -> unit 
override CopyTo : 
        array : 'T[] * 
        arrayIndex : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs#L281" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaList_1">T</a>[]</dt><dd>The array.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The first index of the array to copy to.</dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.copyto" target="_blank" rel="noopener noreferrer">ICollection(T).CopyTo(T[], Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

