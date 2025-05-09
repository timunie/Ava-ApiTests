# ShowAtCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool ShowAtCore(
	Control placementTarget,
	bool showAtPointer = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function ShowAtCore ( 
	placementTarget As Control,
	Optional showAtPointer As Boolean = false
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShowAtCore : 
        placementTarget : Control * 
        ?showAtPointer : bool 
(* Defaults:
        let _showAtPointer = defaultArg showAtPointer false
*)
-> bool 
override ShowAtCore : 
        placementTarget : Control * 
        ?showAtPointer : bool 
(* Defaults:
        let _showAtPointer = defaultArg showAtPointer false
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Flyouts/PopupFlyoutBase.cs#L250" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True, if action was handled

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

