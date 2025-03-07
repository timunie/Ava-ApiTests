# GetOldAndNewValue&lt;T&gt; Method


Gets a typed value from <a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_OldValue">OldValue</a> and <a href="P_Avalonia_AvaloniaPropertyChangedEventArgs_NewValue">NewValue</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static (T , T ) GetOldAndNewValue<T>(
	this AvaloniaPropertyChangedEventArgs e
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetOldAndNewValue(Of T) ( 
	e As AvaloniaPropertyChangedEventArgs
) As ( As T,  As T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetOldAndNewValue : 
        e : AvaloniaPropertyChangedEventArgs -> ValueTuple<'T, 'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyChangedExtensions.cs#L38" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a></dt><dd>The event args.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The value type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(T, T)  
The value.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyChangedExtensions">AvaloniaPropertyChangedExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
