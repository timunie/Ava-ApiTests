# GetMetadata(Type) Method


Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DirectPropertyMetadata<TValue> GetMetadata(
	Type type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetMetadata ( 
	type As Type
) As DirectPropertyMetadata(Of TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetMetadata : 
        type : Type -> DirectPropertyMetadata<'TValue> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/DirectPropertyBase.cs#L89" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type for which to retrieve metadata.</dd></dl>

#### Return Value
<a href="T_Avalonia_DirectPropertyMetadata_1">DirectPropertyMetadata</a>(<a href="T_Avalonia_DirectPropertyBase_1">TValue</a>)For performance, prefer the <a href="M_Avalonia_AvaloniaProperty_GetMetadata">GetMetadata(AvaloniaObject)</a> overload when possible.

## See Also


#### Reference
<a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue) Class</a>  
<a href="Overload_Avalonia_DirectPropertyBase_1_GetMetadata">GetMetadata Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
