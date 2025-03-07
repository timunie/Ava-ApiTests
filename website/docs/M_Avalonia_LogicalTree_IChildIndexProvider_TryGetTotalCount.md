# TryGetTotalCount Method


Total children count or null if source is infinite. Some Avalonia features might not work if TryGetTotalCount(Int32) returns false, for instance: nth-last-child selector.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryGetTotalCount(
	out int count
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetTotalCount ( 
	<OutAttribute> ByRef count As Integer
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetTotalCount : 
        count : int byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/IChildIndexProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_IChildIndexProvider">IChildIndexProvider Interface</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  
