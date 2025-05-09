# OnesComplement Operator


Provides access to a property's template binding via the <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> indexer.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IndexerDescriptor operator ~(
	AvaloniaProperty property
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator ~ ( 
	property As AvaloniaProperty
) As IndexerDescriptor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
F# does not support this operator.
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs#L189" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor</a>  
A <a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor</a> describing the binding.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

