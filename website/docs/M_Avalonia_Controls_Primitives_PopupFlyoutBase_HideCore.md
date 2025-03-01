import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# HideCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool HideCore(
	bool canCancel = true
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function HideCore ( 
	Optional canCancel As Boolean = true
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract HideCore : 
        ?canCancel : bool 
(* Defaults:
        let _canCancel = defaultArg canCancel true
*)
-> bool 
override HideCore : 
        ?canCancel : bool 
(* Defaults:
        let _canCancel = defaultArg canCancel true
*)
-> bool 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True, if action was handled

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
