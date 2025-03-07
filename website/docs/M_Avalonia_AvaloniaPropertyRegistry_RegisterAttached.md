# RegisterAttached Method


Registers an attached <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RegisterAttached(
	Type type,
	AvaloniaProperty property
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RegisterAttached ( 
	type As Type,
	property As AvaloniaProperty
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RegisterAttached : 
        type : Type * 
        property : AvaloniaProperty -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyRegistry.cs#L484" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd></dl>You won't usually want to call this method directly, instead use the <a href="M_Avalonia_AvaloniaProperty_RegisterAttached__2">RegisterAttached(THost, TValue)(String, Type, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue))</a> method.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyRegistry">AvaloniaPropertyRegistry Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
