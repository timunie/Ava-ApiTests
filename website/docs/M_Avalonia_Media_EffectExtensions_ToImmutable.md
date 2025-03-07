# ToImmutable Method


Converts a effect to an immutable effect.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IImmutableEffect ToImmutable(
	this IEffect effect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToImmutable ( 
	effect As IEffect
) As IImmutableEffect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToImmutable : 
        effect : IEffect -> IImmutableEffect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Effects/EffectExtesions.cs#L42" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IEffect">IEffect</a></dt><dd>The effect.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_IImmutableEffect">IImmutableEffect</a>  
The result of calling ToImmutable() if the effect is mutable, otherwise *effect*.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_IEffect">IEffect</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_EffectExtensions">EffectExtensions Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
