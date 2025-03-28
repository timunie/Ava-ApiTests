# GetMetadata(Type) Method


Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaPropertyMetadata GetMetadata(
	Type type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetMetadata ( 
	type As Type
) As AvaloniaPropertyMetadata
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetMetadata : 
        type : Type -> AvaloniaPropertyMetadata 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs#L487" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type for which to retrieve metadata.</dd></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>

## Remarks
For performance, prefer the <a href="M_Avalonia_AvaloniaProperty_GetMetadata">GetMetadata(AvaloniaObject)</a> overload when possible.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="Overload_Avalonia_AvaloniaProperty_GetMetadata">GetMetadata Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

