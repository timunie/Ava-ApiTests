---
title:FindAncestorOfType&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FindAncestorOfType&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static T FindAncestorOfType<T>(
	this Visual? visual,
	bool includeSelf = false
)
where T : class

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function FindAncestorOfType(Of T As Class) ( 
	visual As Visual,
	Optional includeSelf As Boolean = false
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member FindAncestorOfType : 
        visual : Visual * 
        ?includeSelf : bool 
(* Defaults:
        let _includeSelf = defaultArg includeSelf false
*)
-> 'T  when 'T : not struct
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions Class</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  
