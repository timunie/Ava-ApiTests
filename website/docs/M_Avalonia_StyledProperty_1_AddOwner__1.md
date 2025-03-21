# AddOwner&lt;TOwner&gt; Method


Registers the property on another type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public StyledProperty<TValue> AddOwner<TOwner>(
	StyledPropertyMetadata<TValue>? metadata = null
)
where TOwner : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AddOwner(Of TOwner As AvaloniaObject) ( 
	Optional metadata As StyledPropertyMetadata(Of TValue) = Nothing
) As StyledProperty(Of TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AddOwner : 
        ?metadata : StyledPropertyMetadata<'TValue> 
(* Defaults:
        let _metadata = defaultArg metadata null
*)
-> StyledProperty<'TValue>  when 'TOwner : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledProperty.cs#L66" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata</a>(<a href="T_Avalonia_StyledProperty_1">TValue</a>)  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the additional owner.</dd></dl>

#### Return Value
<a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(<a href="T_Avalonia_StyledProperty_1">TValue</a>)  
The property.

## See Also


#### Reference
<a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

