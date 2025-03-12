# GetMetadata(AvaloniaObject) Method


Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified object.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public StyledPropertyMetadata<TValue> GetMetadata(
	AvaloniaObject owner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetMetadata ( 
	owner As AvaloniaObject
) As StyledPropertyMetadata(Of TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetMetadata : 
        owner : AvaloniaObject -> StyledPropertyMetadata<'TValue> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledProperty.cs#L124" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object for which to retrieve metadata.</dd></dl>

#### Return Value
<a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata</a>(<a href="T_Avalonia_StyledProperty_1">TValue</a>)

## See Also


#### Reference
<a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue) Class</a>  
<a href="Overload_Avalonia_StyledProperty_1_GetMetadata">GetMetadata Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

