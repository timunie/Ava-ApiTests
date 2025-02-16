---
title:Compositor Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Compositor Constructor


Initializes a new instance of the <a href="T_Avalonia_Rendering_Composition_Compositor">Compositor</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Compositor(
	IPlatformGraphics? gpu,
	bool useUiThreadForSynchronousCommits = false
)
```
**VB**
``` VB
Public Sub New ( 
	gpu As IPlatformGraphics,
	Optional useUiThreadForSynchronousCommits As Boolean = false
)
```
**F#**
``` F#
new : 
        gpu : IPlatformGraphics * 
        ?useUiThreadForSynchronousCommits : bool 
(* Defaults:
        let _useUiThreadForSynchronousCommits = defaultArg useUiThreadForSynchronousCommits false
*)
-> Compositor
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
