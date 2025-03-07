# GetChildIndex Method


Gets child's actual index in order of the original source.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
int GetChildIndex(
	ILogical child
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetChildIndex ( 
	child As ILogical
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetChildIndex : 
        child : ILogical -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/IChildIndexProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd>Logical child.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
Index or -1 if child was not found.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_IChildIndexProvider">IChildIndexProvider Interface</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  
