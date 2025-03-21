# GenerateTypeSafeMetadata Method


Gets a copy of this object configured for use with any owner type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override AvaloniaPropertyMetadata GenerateTypeSafeMetadata()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function GenerateTypeSafeMetadata As AvaloniaPropertyMetadata
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GenerateTypeSafeMetadata : unit -> AvaloniaPropertyMetadata 
override GenerateTypeSafeMetadata : unit -> AvaloniaPropertyMetadata 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledPropertyMetadata%601.cs#L70" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>

## Remarks
For example, delegates which receive the owner object should be removed.

## See Also


#### Reference
<a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

