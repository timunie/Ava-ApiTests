# ToImmutable Method


Converts a brush to an immutable brush.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IExperimentalAcrylicMaterial ToImmutable(
	this IExperimentalAcrylicMaterial material
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToImmutable ( 
	material As IExperimentalAcrylicMaterial
) As IExperimentalAcrylicMaterial
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToImmutable : 
        material : IExperimentalAcrylicMaterial -> IExperimentalAcrylicMaterial 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/MaterialExtensions.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a></dt><dd>The brush.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>  
The result of calling ToImmutable() if the brush is mutable, otherwise *material*.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_MaterialExtensions">MaterialExtensions Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
