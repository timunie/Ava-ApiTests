# GenerateTypeSafeMetadata Method


Gets a copy of this object configured for use with any owner type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract AvaloniaPropertyMetadata GenerateTypeSafeMetadata()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function GenerateTypeSafeMetadata As AvaloniaPropertyMetadata
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GenerateTypeSafeMetadata : unit -> AvaloniaPropertyMetadata 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyMetadata.cs" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>For example, delegates which receive the owner object should be removed.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

