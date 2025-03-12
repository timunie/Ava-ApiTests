# GetMetadata&lt;T&gt; Method


Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaPropertyMetadata GetMetadata<T>()
where T : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetMetadata(Of T As AvaloniaObject) As AvaloniaPropertyMetadata
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetMetadata : unit -> AvaloniaPropertyMetadata  when 'T : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs#L477" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd>The type for which to retrieve metadata.</dd></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="Overload_Avalonia_AvaloniaProperty_GetMetadata">GetMetadata Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

