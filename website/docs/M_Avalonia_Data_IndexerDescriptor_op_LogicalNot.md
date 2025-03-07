# LogicalNot Operator


Makes a two-way binding.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IndexerDescriptor operator !(
	IndexerDescriptor binding
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator Not ( 
	binding As IndexerDescriptor
) As IndexerDescriptor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (not)
        binding : IndexerDescriptor  : IndexerDescriptor
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/IndexerDescriptor.cs#L69" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor</a></dt><dd>The current binding.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor</a>  
A two-way binding.

## See Also


#### Reference
<a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
